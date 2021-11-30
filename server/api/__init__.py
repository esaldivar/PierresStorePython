from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from dotenv import load_dotenv
import os
load_dotenv()

app = Flask(__name__, static_url_path='', static_folder='../../dist')
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = f'{os.getenv("POSTGRESQL_URI")}'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

