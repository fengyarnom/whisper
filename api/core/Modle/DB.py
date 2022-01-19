from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
db = SQLAlchemy()
ma = Marshmallow()

class User(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(30), unique = True,nullable=False)
    password = db.Column(db.String(50),nullable=False)
    def __repr__(self):
       return "<User(username='%s', password='%s')>" % (
            self.username, self.password)

class Post(db.Model):
    id = db.Column(db.Integer, unique=True,primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    time = db.Column(db.Date, nullable=False)
    pid = db.Column(db.String(60), nullable=False)
    isTop = db.Column(db.Integer, nullable=True)
    tag = db.Column(db.String(60), nullable=True)

    def __repr__(self):
        return '<Post %r>' % self.title

class Notice(db.Model):
    id = db.Column(db.Integer, unique=True,primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    time = db.Column(db.Date, nullable=False)
    pid = db.Column(db.String(60), nullable=False)
    tag = db.Column(db.String(60), nullable=True)

    def __repr__(self):
        return '<Post %r>' % self.pid

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User

class PostSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Post

class NoticeSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Notice

