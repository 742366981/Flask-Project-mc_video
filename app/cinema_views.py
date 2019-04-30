from flask import Blueprint, render_template

cinema_blueprint = Blueprint('cinema', __name__)


@cinema_blueprint.route('/index/', methods=['GET'])
def index():
    """
    首页
    :return:
    """
    return render_template('content/index.htm')


@cinema_blueprint.route('/movie_details/<int:id>/', methods=['GET'])
def movie_detail(id):
    """
    电影详情页
    :param id: 电影id,int类型
    :return:
    """
    return render_template('content/detail.htm')


@cinema_blueprint.route('/fuli_details/<int:id>/', methods=['GET'])
def fuli_detail(id):
    """
    福利详情页
    :param id: 福利id,int类型
    :return:
    """
    return render_template('content/detail.htm')


@cinema_blueprint.route('/tv_list_details/<string:name>/', methods=['GET'])
def tv_detail(name):
    """
    电视剧详情页
    :param name: 剧名,str类型
    :return:
    """
    return render_template('content/list_detail.htm')


@cinema_blueprint.route('/animation_list_details/<string:name>/', methods=['GET'])
def animation_detail(name):
    """
    动漫详情页
    :param name: 动漫名,str类型
    :return:
    """
    return render_template('content/list_detail.htm')


@cinema_blueprint.route('/show_list_details/<string:name>/', methods=['GET'])
def show_detail(name):
    """
    综艺详情页
    :param name: 综艺名,str类型
    :return:
    """
    return render_template('content/list_detail.htm')


@cinema_blueprint.route('/display_movie/<string:type>/', methods=['GET'])
def display_movie(type):
    return render_template('content/display.htm')
