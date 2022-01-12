from flask import Flask,render_template,request,jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_utils import database_exists,create_database
import time
from datetime import datetime
import json

from core import create_app
from core.Modle.DB import *
from flask_marshmallow import Marshmallow
# 初始化app和db实例
# app 的初始化在 core的__init__包
# db  的模型在core->Modle->DB包
app,db = create_app()
# ma = Marshmallow(app)



@app.route('/',methods=['POST', 'GET'])
def index():
    # 逻辑：
    # 1.数据库未创建和传来Post请求，则初始化数据库
    # 2.数据库未创建和传来Get请求，发送DBINIT页面，引导完成数据库基本消息
    # 3.不属于以上情况，则正常显示index.html页面
    if not database_exists(app.config["SQLALCHEMY_DATABASE_URI"]) and request.method == 'POST':
        create_database(app.config["SQLALCHEMY_DATABASE_URI"])
        db.create_all()
        
        root = User(username = request.form['username'],password=request.form['password'])
        defalutPost = Post(
            title = "你好，世界",
            content="这是系统默认添加的一篇博文，当您看到它的时候，说明服务器与数据库配置正确",
            pid = time.strftime("%Y%m%d%H%M%S", time.localtime()),
            time = datetime.now(),
            tag = "默认",
            isTop = 0
            )
        defalutPost2 = Post(
            title = "你好，世界2",
            content="2这是系统默认添加的一篇博文，当您看到它的时候，说明服务器与数据库配置正确",
            pid = time.strftime("%Y%m%d%H%M%S", time.localtime()),
            time = datetime.now(),
            tag = "默认",
            isTop = 0
            )
        db.session.add(root)
        db.session.add(defalutPost)
        db.session.add(defalutPost2)
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

# 测试
@app.route('/api/getPostByTime',methods=['POST', 'GET'])
def getPostByTime():
    # posts = Post.query.order_by(Post.id.desc()).filter_by(isTop=0).limit(5).all()

    # one_user = User.query.first()
    # user_schema = UserSchema()
    # output  = user_schema.dump(one_user)

    one_post = Post.query.all()
    print(one_post)
    post_schema = PostSchema(many=True)
    output2 = post_schema.dump(one_post)
    # post_schema = PostSchema()
    # output = post_schema(posts)
    # print(output)
    return jsonify({'data':output2})

if __name__ == '__main__':
    app.run('0.0.0.0.',port=80,debug=True)