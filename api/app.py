from flask import Flask,render_template,request,jsonify
from flask_cors import *
import pymysql
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_utils import database_exists,create_database
import json


# 初始化
app = Flask(__name__)
# 打开配置文件
config = open('./config.json','r+')
config = json.load(config)
url = "mysql+pymysql://{}:{}@{}/{}".format(
    config['db_user'],config['db_pass'],config['db_server'],config['db_name']
    )
app.config["SQLALCHEMY_DATABASE_URI"] = url
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = True
db = SQLAlchemy(app)
# 设置允许跨域请求
CORS(app, supports_credentials=True)

# User 表
class User(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(30), unique = True)
    password = db.Column(db.String(50), unique = True)
    def __repr__(self):
       return "<User(username='%s', password='%s')>" % (
            self.name, self.password)

@app.route('/',methods=['POST', 'GET'])
def index():
    # 逻辑：
    # 1.数据库未创建和传来Post请求，则初始化数据库
    # 2.数据库未创建和传来Get请求，发送DBINIT页面，引导完成数据库基本消息
    # 3.不属于以上情况，则正常显示index.html页面
    if not database_exists(app.config["SQLALCHEMY_DATABASE_URI"]) and request.method == 'POST':
        print(request.form['username'])
        print(request.form['password'])
        create_database(app.config["SQLALCHEMY_DATABASE_URI"])
        db.create_all()
        
        root = User(username = request.form['username'],password=request.form['password'])
        db.session.add(root)
        db.session.commit()
        return render_template('index.html')
      
    elif not database_exists(app.config["SQLALCHEMY_DATABASE_URI"]) and request.method == 'GET':
        return render_template('DBINIT.html')
    
    else:
        return render_template('index.html')
    

# 测试用
@app.route('/hello',methods=['POST', 'GET'])
def hello():
    if request.method == 'POST':
       he = 'Hello'
       jsonData = request.get_json()
       print(jsonData['uid'])
    else:
        he = 'GET'

    return {
        'data':he
    }

# 测试
@app.route('/api/login',methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
       jsonData = request.get_json()
       print(jsonData)
    return {
        'data':'hello'
    }

if __name__ == '__main__':
    app.run('0.0.0.0.',port=80,debug=True)