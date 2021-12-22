from main import db
from sqlalchemy import *
from sqlalchemy.dialects import postgresql
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import *

class Users(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    phone_number = db.Column(db.String(10), nullable=True)
    email_address = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(500), nullable=False)
    favorites = db.relationship('Favorites', backref='users')

    def to_dict(self):
        return {
            "user_id": self.user_id,
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

class Favorites(db.Model):
    favorite_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'), nullable=False,)
    product_name = db.Column(db.String(50), nullable=False)

    def to_dict(self):
        return {
            "favorite_id ": self.favorite_id,
            "user_id": self.user_id,
            "product_name": self.product_name,
        }