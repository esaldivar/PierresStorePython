from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS


app = Flask(__name__, static_url_path='', static_folder='../../dist')
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://kpyzmoqk:LCpqqoTqkCXkoit6ESNhynEyJq24ewol@castor.db.elephantsql.com/kpyzmoqk"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

