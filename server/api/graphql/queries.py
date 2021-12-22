from api.database.models import Users, Products, Favorites
import bcrypt
from ariadne import convert_kwargs_to_snake_case

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
def resolve_product(obj, info, product_name):
    try:
        products = [product.to_dict() for product in Products.query.all()]
        new_product = ''
        for product in products:
            if(product["product_name"] == product_name):
                new_product = product
        payload = {
            "success": True,
            "product": new_product
        }
    except AttributeError:  # product not found
        payload = {
            "success": False,
            "errors": [f"Unable to find {product_name}"]
        }

    return payload

def resolve_users(obj, info):
    try:
        users = [user.to_dict() for user in Users.query.all()]
        payload = {
            "success": True,
            "users": users
        }
    except Exception as error:
        payload = {
            "success": False,
            "errors": [str(error)]
        }
    return payload

@convert_kwargs_to_snake_case
def resolve_user(obj, info, email_address, password):
    try:
        users = [user.to_dict() for user in Users.query.all()]
        new_user = ''
        auth_user = ''
        byte_password = bytes(password, encoding= 'utf-8')
        encoded_dbpw = ''
        for user in users:
            if(user["email_address"] == email_address):
                new_user = user
                encoded_dbpw = bytes(user['password'], encoding= 'utf-8')

        if(bcrypt.checkpw(byte_password, encoded_dbpw)):
            auth_user = new_user
        payload = {
            "success": True,
            "user": auth_user
        }
    except AttributeError:  # product not found
        payload = {
            "success": False,
            "errors": [f"Unable to find {email_address}"]
        }

    return payload

@convert_kwargs_to_snake_case
def resolve_favorites(obj, info, user_id):
    try:
        favorites = [favorite.to_dict() for favorite in Favorites.query.all()]
        filtered_favorites = []
        for favorite in favorites:
            if favorite['user_id'] == user_id:
                print('searching for favs')
                filtered_favorites.append(favorite)
        
        payload = {
            "success": True,
            "favorites": filtered_favorites
        }
    except AttributeError:  # product not found
        payload = {
            "success": False,
            "errors": [f"Unable to find {user_id}"]
        }

    return payload