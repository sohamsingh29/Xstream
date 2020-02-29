from flask import Flask, render_template
import sqlite3

app = Flask(__name__)

conn = sqlite3.connect('database.db')
c = conn.cursor()
c.execute('SELECT * FROM movies')
data = c.fetchall()

@app.route("/")
def home():

    return render_template("home.html" , data=data)