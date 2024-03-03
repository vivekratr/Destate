from flask import Flask, request, send_file
from flask_cors import CORS
from src.logger import logging
import src.components.orgins as orgins

app = Flask(__name__)
CORS(app)

logging.info("Application started")

@app.route('/', methods=['POST', "GET"])
def doc():
    return "Hello World"


@app.route("/reg_user", methods=["GET", "POST"])
def reg_user():
    try:
        data = request.json
        orgins.cordinates.reg_user(data)
        return "0"
    except Exception as e:
        print(e)
        return "1"
    

@app.route('/login', methods=['POST', "GET"])
def check_login():
    data = request.json
    ans  = orgins.cordinates.login_user(data)
    return ans

    
@app.route('/returnid', methods=['POST', "GET"])
def returnid():
    data = request.json
    ans = orgins.cordinates.returnid(data)
    return ans

    
@app.route('/enterid', methods=['POST', "GET"])
def enterid():
    data = request.json
    data2 = orgins.cordinates.enterid(data)
    return data2

      
@app.route('/makecall', methods=['POST', "GET"])
def calluser():
    data = request.json
    number = str(data["number"])
    orgins.cordinates.callu(number)
    return "0"
    
    
@app.route('/makedoc', methods=['POST', "GET"])
def makedocd():
    data = request.json
    print(data)
    path = orgins.cordinates.makedoc(data)
    return send_file(path, as_attachment=True)   

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)
    