from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/<string:name>')
def greet(name):
    return f'Hello {name}'

@app.route('/')
def hello_world():
    request_method = request.method
    return render_template('index.html', request_method=request_method)

if __name__ == '__main__':
    app.run(debug=True)