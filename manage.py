from flask import Flask
from flask_restful import Api
from flask_script import Manager

from app.cinema_views import cinema_blueprint
from app.models import db
from app.api_views import *

app = Flask(__name__)
app.register_blueprint(cinema_blueprint, url_prefix='/cinema')
app.config.update(RESTFUL_JSON=dict(ensure_ascii=False))
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:123456@127.0.0.1:3306/video_api'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.config['SQLALCHEMY_ECHO'] = True
db.init_app(app)
api.add_resource(MovieSource, '/video/movies/')
api.add_resource(FuliSource, '/video/fulis/')
api.add_resource(TvSource, '/video/tvs/')
api.add_resource(AnimationSource, '/video/animations/')
api.add_resource(ShowSource, '/video/shows/')
api.add_resource(TvListSource, '/video/tv_list/')
api.add_resource(AnimationListSource, '/video/animation_list/')
api.add_resource(ShowListSource, '/video/show_list/')
api.add_resource(MovieDetail, '/video/movie_details/<int:id>/')
api.add_resource(FuliDetail, '/video/fuli_details/<int:id>/')
api.add_resource(Search, '/video/search/')
manager = Manager(app)


if __name__ == '__main__':
    manager.run()
