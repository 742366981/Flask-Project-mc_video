from flask import request
from flask_restful import Resource

from app.models import Movie, Tv, Fuli, Animation, Show
from utils.functions import queryset_to_json


class MySource(Resource):
    # model = None
    def get(self):
        all_resource =self.model.query
        all_count = all_resource.count()
        try:
            page = abs(int(request.args.get('page') or 1))
            size = abs(int(request.args.get('size') or 30))
            z_page, y = divmod(all_count, size)
            data = {'count': size}
            if page > z_page:
                data['previous'] = request.path + '?page=' + str(page - 1) + '&size=' + str(size);
                data['results'] = queryset_to_json(all_resource[-y:])
            elif page <= z_page:
                data['next'] = request.path + '?page=' + str(page + 1) + '&size=' + str(size)
                if page != 1:
                    data['previous'] = request.path + '?page=' + str(page - 1) + '&size=' + str(size);
                data['results'] = queryset_to_json(all_resource[(page - 1) * size:page * size])
            return data
        except Exception as e:
            return {'error': str(e)}



class MovieSource(MySource):
    model = Movie


class FuliSource(MySource):
    model = Fuli


class TvSource(MySource):
    model = Tv


class AnimationSource(MySource):
    model = Animation


class ShowSource(MySource):
    model = Show


class TvListSource(Resource):
    def get(self):
        name = request.args.get('name')
        tv = Tv.query.filter(Tv.tv_name==name).first()
        tv_info = tv.__dict__.copy()
        tv_info.pop('_sa_instance_state', None)
        tv_list = tv.tv_list
        data = {'count': tv_list.count(), 'results': queryset_to_json(tv_list), 'info': tv_info}
        return data


class AnimationListSource(Resource):
    def get(self):
        name = request.args.get('name')
        animation = Animation.query.filter(Animation.tv_name==name).first()
        animation_info = animation.__dict__.copy()
        animation_info.pop('_sa_instance_state', None)
        animation_list = animation.animation_list
        data = {'count': animation_list.count(), 'results': queryset_to_json(animation_list), 'info': animation_info}
        return data


class ShowListSource(Resource):
    def get(self):
        name = request.args.get('name')
        show = Show.query.filter(Show.tv_name==name).first()
        show_info = show.__dict__.copy()
        show_info.pop('_sa_instance_state', None)
        show_list = show.show_list
        data = {'count': show_list.count(), 'results': queryset_to_json(show_list), 'info': show_info}
        return data


class Detail(Resource):
    # model = None
    def get(self, id):
        obj = self.model.query.get(id)
        data = obj.__dict__
        data.pop('_sa_instance_state', None)
        return data


class MovieDetail(Detail):
    model = Movie
