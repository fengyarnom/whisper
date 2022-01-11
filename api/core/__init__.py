from flask import Flask
import json
from flask_cors import *
from core.Modle.DB import db
import pymysql
def create_app():
    app = Flask(__name__)
    # 打开配置文件
    config = open('./config.json','r+')
    config = json.load(config)

    # 服务器地址
    url = "mysql+pymysql://{}:{}@{}/{}".format(
        config['db_user'],config['db_pass'],config['db_server'],config['db_name']
    )
    
    app.config["SQLALCHEMY_DATABASE_URI"] = url
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = True

    db.app=app
    db.init_app(app)

    # 设置允许跨域请求
    CORS(app, supports_credentials=True)
    return app,db
