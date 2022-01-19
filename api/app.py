from flask import Flask,render_template,redirect,url_for,request,jsonify,session
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
app.config['SECRET_KEY'] = 'yarnom'
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
        db.session.add_all([root,defalutPost,defalutPost2])
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

# 登录路由
@app.route('/api/login',methods=['POST', 'GET'])
def login():
    # 目前所有操作
    if request.method == 'POST':
        jsonData = request.get_json()
        if 'username' in jsonData:
            user = User.query.filter(User.username == jsonData['username'],User.password == jsonData['password']).all()
            if len(user) != 0:
                session['username'] = jsonData['username']
                print(session.get('username'))
                return jsonify({'status':'Pass'})
            else:
                return jsonify({'status':'Error'})
                
        
        if 'redirect' in jsonData:
            if jsonData['redirect'] == '200':
                if 'username' in session:
                    return jsonify({'redirect':'200'})
                else:
                    return jsonify({'redirect':'404'})
                
        
    return jsonify({'status':'Normal'})


# 获取文章
@app.route('/api/getPost',methods=['POST', 'GET'])
def getPost():
    # posts = Post.query.order_by(Post.id.desc()).filter_by(isTop=0).limit(5).all()

    # 向数据库获取数据
    post_list = Post.query


    # 获取URL传来的参数
    # 当存在 by = ？ 时，传入 order_by 参数
    by = request.args.get("by")
    # 当存在order = reverse 时，逆序输出列表
    order = request.args.get("order")
    # 当 limit = ? 时，传入限制数
    limit = request.args.get("limit")

    # 处理是否逆序
    if order == "reverse":
        post_list = post_list.order_by(getattr(Post, by, 'id').desc())
    else:
        post_list = post_list.order_by(getattr(Post, by, 'id'))
    
    # 处理输出限制
    if limit is not None:
        post_list = post_list.limit(limit)
    
    # 获取所有列表
    post_list = post_list.all()
    # Marshmallow 序列化 SQLAlchemy 对象
    post_schema = PostSchema(many=True)
    post_list = post_schema.dump(post_list)

    return jsonify({'data':post_list})

# 获取通告
@app.route('/api/getNotice',methods=['POST', 'GET'])
def getNotice():
    # 向数据库获取数据
    notice_list = Notice.query


    # 获取URL传来的参数
    # 当存在 by = ？ 时，传入 order_by 参数
    by = request.args.get("by")
    # 当存在order = reverse 时，逆序输出列表
    order = request.args.get("order")

    # 处理是否逆序
    if order == "reverse":
        notice_list = notice_list.order_by(getattr(Notice, by, 'id').desc())
    else:
        notice_list = notice_list.order_by(getattr(Notice, by, 'id'))
    
    
    # 获取所有列表
    notice_list = notice_list.all()
    # Marshmallow 序列化 SQLAlchemy 对象
    notice_schema = NoticeSchema(many=True)
    notice_list = notice_schema.dump(notice_list)

    return jsonify({'data':notice_list})

@app.route('/api/newPost',methods=['POST', 'GET'])
def newPost():
    if request.method == 'POST':
        jsonData = request.get_json()
        print(jsonData)
        if jsonData['postClass'] == 'post':
            if 'title' in jsonData:
                new_post = Post(
                    title = jsonData['title'],
                    content=jsonData['content'],
                    pid = time.strftime("%Y%m%d%H%M%S", time.localtime()),
                    time = datetime.now(),
                    tag = jsonData['tag'],
                    isTop = 0
                )
                db.session.add_all([new_post])
                db.session.commit()
        elif jsonData['postClass'] == 'notice':
            if 'content' in jsonData:
                new_notice = Notice(
                    title = jsonData['title'],
                    content=jsonData['content'],
                    pid = time.strftime("%Y%m%d%H%M%S", time.localtime()),
                    time = datetime.now(),
                    tag = '默认'
                )
                db.session.add(new_notice)
                db.session.commit()
    return jsonify({'data':'Hello'})
if __name__ == '__main__':
    app.run('0.0.0.0.',port=80,debug=True)