from api.database.models import Customers, Products
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