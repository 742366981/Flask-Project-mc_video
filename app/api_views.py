import itertools
import urllib.parse
import re

from flask import request
from flask_restful import Resource

from app.models import Movie, Tv, Fuli, Animation, Show
from utils.functions import queryset_to_json


class MySource(Resource):
    """
    自定义一个带分页的视频信息基类
    """
    # model = None

    def get(self):
        try:
            if not re.search(r'search', request.path):
                all_resource = self.model.query
                all_count = all_resource.count()
                page = abs(int(request.args.get('page') or 1))
                size = abs(int(request.args.get('size') or 30))
                z_page, y = divmod(all_count, size)
                kind = request.args.get('kind')
                data = {'count': size}
            else:
                page = abs(int(request.args.get('page') or 1))
                size = abs(int(request.args.get('size') or 30))
                data = {'count': size}
            if re.search(r'search', request.path):
                keywords = urllib.parse.unquote(request.args.get('keywords'))
                movies = Movie.query.filter(Movie.movie_name.contains(keywords))
                tvs = Tv.query.filter(Tv.tv_name.contains(keywords))
                shows =  Show.query.filter(Show.show_name.contains(keywords))
                animations = Animation.query.filter(Animation.animation_name.contains(keywords))
                fulis = Fuli.query.filter(Fuli.fuli_name.contains(keywords))
                all_resource = list(itertools.chain(movies, tvs, shows, animations, fulis))
                all_count = movies.count() + tvs.count() + shows.count() + animations.count() + fulis.count()
                z_page, y = divmod(all_count, size)
            else:
                if kind and self.model == Movie:
                    all_resource = all_resource.filter(self.model.movie_type == urllib.parse.unquote(kind))
                    all_count = all_resource.count()
                    z_page, y = divmod(all_count, size)
                elif kind and self.model == Tv:
                    all_resource = all_resource.filter(self.model.tv_type == urllib.parse.unquote(kind))
                    all_count = all_resource.count()
                    z_page, y = divmod(all_count, size)
                elif kind and self.model == Show:
                    all_resource = all_resource.filter(self.model.area == urllib.parse.unquote(kind))
                    all_count = all_resource.count()
                    z_page, y = divmod(all_count, size)
                elif kind and self.model == Animation:
                    all_resource = all_resource.filter(self.model.area == urllib.parse.unquote(kind))
                    all_count = all_resource.count()
                    z_page, y = divmod(all_count, size)
            if page > z_page:
                data['previous'] = request.path + '?page=' + str(page - 1) + '&size=' + str(size)
                data['results'] = queryset_to_json(all_resource[-y:])
            elif page <= z_page:
                data['next'] = request.path + '?page=' + str(page + 1) + '&size=' + str(size)
                if page != 1:
                    data['previous'] = request.path + '?page=' + str(page - 1) + '&size=' + str(size)
                data['results'] = queryset_to_json(all_resource[(page - 1) * size:page * size])
            if size == 30:
                data['pages'] = z_page + 1
            return data
        except Exception as e:
            return {'error': str(e)}


class MovieSource(MySource):
    """
    电影
    """
    model = Movie


class FuliSource(MySource):
    """
    福利
    """
    model = Fuli


class TvSource(MySource):
    """电视剧"""
    model = Tv


class AnimationSource(MySource):
    """动漫"""
    model = Animation


class ShowSource(MySource):
    """
    综艺
    """
    model = Show


class TvListSource(Resource):
    """
    一部电视剧的详情及集数
    """

    def get(self):
        name = request.args.get('name')
        name = urllib.parse.unquote(name)
        tv = Tv.query.filter(Tv.tv_name == name).first()
        tv_info = tv.__dict__.copy()
        tv_info.pop('_sa_instance_state', None)
        tv_list = tv.tv_list
        data = {'count': tv_list.count(), 'results': queryset_to_json(tv_list), 'info': tv_info}
        return data


class AnimationListSource(Resource):
    """
    一部动漫的详情及集数
    """

    def get(self):
        name = request.args.get('name')
        name = urllib.parse.unquote(name)
        animation = Animation.query.filter(Animation.animation_name == name).first()
        animation_info = animation.__dict__.copy()
        animation_info.pop('_sa_instance_state', None)
        animation_list = animation.animation_list
        data = {'count': animation_list.count(), 'results': queryset_to_json(animation_list), 'info': animation_info}
        return data


class ShowListSource(Resource):
    """
    一部综艺的详情及集数
    """

    def get(self):
        name = request.args.get('name')
        name = urllib.parse.unquote(name)
        show = Show.query.filter(Show.show_name == name).first()
        show_info = show.__dict__.copy()
        show_info.pop('_sa_instance_state', None)
        show_list = show.show_list
        data = {'count': show_list.count(), 'results': queryset_to_json(show_list), 'info': show_info}
        return data


class Detail(Resource):
    """
    单一视频的详情(非连续剧类型)基类
    """

    # model = None
    def get(self, id):
        obj = self.model.query.get(id)
        data = obj.__dict__
        data.pop('_sa_instance_state', None)
        return data


class MovieDetail(Detail):
    """
    一部电影的详情
    """
    model = Movie


class FuliDetail(Detail):
    """
    一部福利的详情
    """
    model = Fuli


class Search(MySource):
    """
    搜索
    """
