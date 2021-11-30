from api.database.models import Todo, Customers, Products
from ariadne import convert_kwargs_to_snake_case


def resolve_todos(obj, info):
    try:
        todos = [todo.to_dict() for todo in Todo.query.all()]
        payload = {
            "success": True,
            "todos": todos
        }
    except Exception as error:
        payload = {
            "success": False,
            "errors": [str(error)]
        }
    return payload

@convert_kwargs_to_snake_case
def resolve_todo(obj, info, todo_id):
    try:
        todo = Todo.query.get(todo_id)
        payload = {
            "success": True,
            "todo": todo.to_dict()
        }

    except AttributeError:  # todo not found
        payload = {
            "success": False,
            "errors": [f"Todo item matching id {todo_id} not found"]
        }

    return payload

def resolve_products(obj, info):
    try:
        products = [product.to_dict() for product in Products.query.all()]
        payload = {
            "success": True,
            "products": products
        }
    except Exception as error:
        payload = {
            "success": False,
            "errors": [str(error)]
        }
    return payload

@convert_kwargs_to_snake_case
def resolve_product(obj, info, product_id):
    try:
        product = Products.query.get(product_id)
        payload = {
            "success": True,
            "product": product.to_dict()
        }

    except AttributeError:  # product not found
        payload = {
            "success": False,
            "errors": [f"Product item matching id {product_id} not found"]
        }

    return payload