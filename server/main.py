from flask import Flask, send_from_directory
from api import app, db
from api.database import models
from ariadne import load_schema_from_path, make_executable_schema, \
    graphql_sync, snake_case_fallback_resolvers, ObjectType
from ariadne.constants import PLAYGROUND_HTML
from flask import request, jsonify
from api.graphql.queries import resolve_products, resolve_product, resolve_user, resolve_users, resolve_favorites
from api.graphql.mutations import resolve_create_product, resolve_delete_product, resolve_create_user, resolve_add_favorite, resolve_delete_favorite

query = ObjectType("Query")
query.set_field("products", resolve_products)
query.set_field("product", resolve_product)
query.set_field("users", resolve_users)
query.set_field("user", resolve_user)
query.set_field("favorites", resolve_favorites)

mutation = ObjectType("Mutation")
# mutation.set_field("markDone", resolve_mark_done)
mutation.set_field("deleteProduct", resolve_delete_product)
mutation.set_field("createProduct", resolve_create_product)
mutation.set_field("createUser", resolve_create_user)
mutation.set_field("addFavorite", resolve_add_favorite)
mutation.set_field("deleteFavorite", resolve_delete_favorite)

type_defs = load_schema_from_path("api/graphql/schema.graphql")
schema = make_executable_schema(
    type_defs, query, mutation, snake_case_fallback_resolvers
)

@app.route("/graphql", methods=["GET"])
def graphql_playground():
    return PLAYGROUND_HTML, 200

@app.route("/graphql", methods=["POST"])
def graphql_server():
    data = request.get_json()

    success, result = graphql_sync(
        schema,
        data,
        context_value=request,
        debug=app.debug
    )

    status_code = 200 if success else 400
    return jsonify(result), status_code

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

@app.route("/login", endpoint='login')
def login():
    return 'hello from the flask booiii'

if __name__ == '__main__':
    app.run(debug=True)