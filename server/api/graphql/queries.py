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