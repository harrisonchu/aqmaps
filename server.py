import os
from dotenv import load_dotenv
from flask import Flask, jsonify, request, render_template

app = Flask(__name__)
load_dotenv()

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/hello")
def hello():
    return "Hello World"

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))