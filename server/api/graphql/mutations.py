from datetime import datetime
import bcrypt
from ariadne import convert_kwargs_to_snake_case

from api import db
from api.database.models import Products, Users

@convert_kwargs_to_snake_case
def resolve_create_product(obj, info, product_name, image_url, price, information, season, category, quantity):
    try:
        product = Products(
            product_name=product_name, image_url=image_url, price=price, information=information ,season=season , category=category , quantity=quantity
        )
        db.session.add(product)
        db.session.commit()
        payload = {
            "success": True,
            "product": product.to_dict()
        }
    except ValueError:  # product format errors
        payload = {
            "success": False,
            "errors": [f"Incorrectly added product.  Please try again."]
        }

    return payload

@convert_kwargs_to_snake_case
def resolve_delete_product(obj, info, product_id):
    try:
        product = Products.query.get(product_id)
        db.session.delete(product)
        db.session.commit()
        payload = {"success": True}

    except AttributeError:
        payload = {
            "success": False,
            "errors": [f"Todo matching id {product_id} not found"]
        }

    return payload

# @convert_kwargs_to_snake_case
# def resolve_update_due_date(obj, info, todo_id, new_date):
#     try:
#         todo = Todo.query.get(todo_id)
#         if todo:
#             todo.due_date = datetime.strptime(new_date, '%d-%m-%Y').date()
#         db.session.add(todo)
#         db.session.commit()
#         payload = {
#             "success": True,
#             "todo": todo.to_dict()
#         }

#     except ValueError:  # date format errors
#         payload = {
#             "success": False,
#             "errors": ["Incorrect date format provided. Date should be in "
#                        "the format dd-mm-yyyy"]
#         }
#     except AttributeError:  # todo not found
#         payload = {
#             "success": False,
#             "errors": [f"Todo matching id {todo_id} not found"]
#         }
#     return payload

@convert_kwargs_to_snake_case
def resolve_create_user(obj, info, first_name, last_name, email_address, phone_number, password):
    try:
        byte_password = bytes(password, encoding= 'utf-8')
        salt = bcrypt.gensalt(12)
        pw_hash = bcrypt.hashpw(byte_password, salt)
        decoded_pw = pw_hash.decode()
        user = Users(first_name=first_name, last_name=last_name, email_address=email_address, phone_number=phone_number, password=decoded_pw)
        db.session.add(user)
        db.session.commit()
        payload = {
            "success": True,
            "user": user.to_dict()
        }
    except ValueError:  # product format errors
        payload = {
            "success": False,
            "errors": [f"Incorrectly added product.  Please try again."]
        }

    return payload