from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
# from api.HelloApiHandler import HelloApiHandler

app = Flask(__name__, static_url_path='', static_folder='../dist')
CORS(app) #comment this on deployment
api = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

@app.route("/login")
def login():
    return 'hello from the flask server'

if __name__ == '__main__':
    app.run(debug=True)