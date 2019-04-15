from flask_sqlalchemy import SQLAlchemy


db =SQLAlchemy()


class Animation(db.Model):
    __tablename__ = 'animation'
    animation_img = db.Column(db.String(255), nullable=False)
    animation_name = db.Column(db.String(100), primary_key=True, unique=True)
    director = db.Column(db.String(50), nullable=False)
    staring = db.Column(db.String(200), nullable=False)
    animation_type = db.Column(db.String(20), nullable=False)
    area = db.Column(db.String(20), nullable=False)
    languages = db.Column(db.String(30), nullable=False)
    release_time = db.Column(db.String(50), nullable=False)
    update_time = db.Column(db.String(30), nullable=False)
    summary = db.Column(db.String(2000), nullable=False)
    animation_list = db.relationship('AnimationList', backref='animation', lazy='dynamic')


class Fuli(db.Model):
    __tablename__ = 'fuli'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    fuli_img = db.Column(db.String(255), nullable=False)
    fuli_name = db.Column(db.String(100), nullable=False, unique=True)
    director = db.Column(db.String(50), nullable=False)
    staring = db.Column(db.String(200), nullable=False)
    fuli_type = db.Column(db.String(20), nullable=False)
    area = db.Column(db.String(20), nullable=False)
    languages = db.Column(db.String(30), nullable=False)
    release_time = db.Column(db.String(50), nullable=False)
    update_time = db.Column(db.String(30), nullable=False)
    summary = db.Column(db.String(2000), nullable=False)
    play_url = db.Column(db.String(255), nullable=False)


class Movie(db.Model):
    __tablename__ = 'movie'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    movie_img = db.Column(db.String(255), nullable=False)
    movie_name = db.Column(db.String(100), nullable=False, unique=True)
    director = db.Column(db.String(50), nullable=False)
    staring = db.Column(db.String(200), nullable=False)
    movie_type = db.Column(db.String(20), nullable=False)
    area = db.Column(db.String(20), nullable=False)
    languages = db.Column(db.String(30), nullable=False)
    release_time = db.Column(db.String(50), nullable=False)
    update_time = db.Column(db.String(30), nullable=False)
    summary = db.Column(db.String(2000), nullable=False)
    play_url = db.Column(db.String(255), nullable=False)


class Show(db.Model):
    __tablename__ = 'shows'

    show_img = db.Column(db.String(255), nullable=False)
    show_name = db.Column(db.String(100), primary_key=True, unique=True)
    director = db.Column(db.String(50), nullable=False)
    staring = db.Column(db.String(200), nullable=False)
    show_type = db.Column(db.String(20), nullable=False)
    area = db.Column(db.String(20), nullable=False)
    languages = db.Column(db.String(30), nullable=False)
    release_time = db.Column(db.String(50), nullable=False)
    update_time = db.Column(db.String(30), nullable=False)
    summary = db.Column(db.String(2000), nullable=False)
    show_list = db.relationship('ShowList', backref='show', lazy='dynamic')


class Tv(db.Model):
    __tablename__ = 'tv'

    tv_img = db.Column(db.String(255), nullable=False)
    tv_name = db.Column(db.String(100), primary_key=True, unique=True)
    director = db.Column(db.String(50), nullable=False)
    staring = db.Column(db.String(200), nullable=False)
    tv_type = db.Column(db.String(20), nullable=False)
    area = db.Column(db.String(20), nullable=False)
    languages = db.Column(db.String(30), nullable=False)
    release_time = db.Column(db.String(50), nullable=False)
    update_time = db.Column(db.String(30), nullable=False)
    summary = db.Column(db.String(2000), nullable=False)
    tv_list = db.relationship('TvList', backref='tv', lazy='dynamic')


class AnimationList(db.Model):
    __tablename__ = 'animation_list'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    animation_name = db.Column(db.String(100), db.ForeignKey('animation.animation_name'), nullable=False)
    num = db.Column(db.String(30), nullable=False)
    play_url = db.Column(db.String(255), nullable=False, unique=True)


class ShowList(db.Model):
    __tablename__ = 'show_list'

    id = db.Column(db.Integer, primary_key=True)
    show_name = db.Column(db.String(100), db.ForeignKey('shows.show_name'), nullable=False)
    num = db.Column(db.String(30), nullable=False)
    play_url = db.Column(db.String(255), nullable=False, unique=True)


class TvList(db.Model):
    __tablename__ = 'tv_list'

    id = db.Column(db.Integer, primary_key=True)
    tv_name = db.Column(db.String(100), db.ForeignKey('tv.tv_name'), nullable=False)
    num = db.Column(db.String(30), nullable=False)
    play_url = db.Column(db.String(255), nullable=False, unique=True)
