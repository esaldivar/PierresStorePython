from datetime import datetime

from ariadne import convert_kwargs_to_snake_case

from api import db
from api.database.models import Todo, Products


@convert_kwargs_to_snake_case
def resolve_create_todo(obj, info, description, due_date):
    try:
        due_date = datetime.strptime(due_date, '%d-%m-%Y').date()
        todo = Todo(
            description=description, due_date=due_date
        )
        db.session.add(todo)
        db.session.commit()
        payload = {
            "success": True,
            "todo": todo.to_dict()
        }
    except ValueError:  # date format errors
        payload = {
            "success": False,
            "errors": [f"Incorrect date format provided. Date should be in "
                       f"the format dd-mm-yyyy"]
        }

    return payload

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
def resolve_mark_done(obj, info, todo_id):
    try:
        todo = Todo.query.get(todo_id)
        todo.completed = True
        db.session.add(todo)
        db.session.commit()
        payload = {
            "success": True,
            "todo": todo.to_dict()
        }
    except AttributeError:  # todo not found
        payload = {
            "success": False,
            "errors":  [f"Todo matching id {todo_id} was not found"]
        }

    return payload

@convert_kwargs_to_snake_case
def resolve_mark_done(obj, info, todo_id):
    try:
        todo = Todo.query.get(todo_id)
        todo.completed = True
        db.session.add(todo)
        db.session.commit()
        payload = {
            "success": True,
            "todo": todo.to_dict()
        }
    except AttributeError:  # todo not found
        payload = {
            "success": False,
            "errors":  [f"Todo matching id {todo_id} was not found"]
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

@convert_kwargs_to_snake_case
def resolve_delete_todo(obj, info, todo_id):
    try:
        todo = Todo.query.get(todo_id)
        db.session.delete(todo)
        db.session.commit()
        payload = {"success": True}

    except AttributeError:
        payload = {
            "success": False,
            "errors": [f"Todo matching id {todo_id} not found"]
        }

    return payload

@convert_kwargs_to_snake_case
def resolve_update_due_date(obj, info, todo_id, new_date):
    try:
        todo = Todo.query.get(todo_id)
        if todo:
            todo.due_date = datetime.strptime(new_date, '%d-%m-%Y').date()
        db.session.add(todo)
        db.session.commit()
        payload = {
            "success": True,
            "todo": todo.to_dict()
        }

    except ValueError:  # date format errors
        payload = {
            "success": False,
            "errors": ["Incorrect date format provided. Date should be in "
                       "the format dd-mm-yyyy"]
        }
    except AttributeError:  # todo not found
        payload = {
            "success": False,
            "errors": [f"Todo matching id {todo_id} not found"]
        }
    return payload