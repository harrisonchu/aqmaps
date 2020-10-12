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

app.run(debug=True)