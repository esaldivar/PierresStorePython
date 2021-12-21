from main import db
from sqlalchemy import *
from sqlalchemy.dialects import postgresql
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import *

class Customers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    phone_number = db.Column(db.String(10), nullable=False)
    email_address = db.Column(db.String(50), unique=True, nullable=False)
    street = db.Column(db.String(50), nullable=False)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(20), nullable=False)
    zip_code = db.Column(db.String(5), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "phone_number": self.phone_number,
            "email_address": self.email_address,
            "street": self.street,
            "city": self.city,
            "state": self.state,
            "zip_code": self.zip_code
        }

class Clients(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    phone_number = db.Column(db.String(10), nullable=False)
    email_address = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "phone_number": self.phone_number,
            "email_address": self.email_address,
            "password": self.password,
        }

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    phone_number = db.Column(db.String(10), nullable=True)
    email_address = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(500), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "phone_number": self.phone_number,
            "email_address": self.email_address,
            "password": self.password,
        }


class Products(db.Model):
    product_id  = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String, unique=True, nullable=False)
    image_url = db.Column(db.String, unique=True, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    information = db.Column(db.String, nullable=False)
    season = db.Column(postgresql.ARRAY(String))
    category = db.Column(postgresql.ARRAY(String), nullable=False)
    quantity = db.Column(db.String, nullable=False)

    def to_dict(self):
        return {
            "product_id ": self.product_id,
            "product_name": self.product_name,
            "image_url": self.image_url,
            "price": self.price,
            "information": self.information,
            "season": self.season,
            "category": self.category,
            "quantity": self.quantity
        }