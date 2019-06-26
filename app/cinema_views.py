from flask import Blueprint, render_template

cinema_blueprint = Blueprint('cinema', __name__, url_prefix='/cinema')


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


@cinema_blueprint.route('/movie_display/<string:kind>/', methods=['GET'])
def movie_display(kind):
    """
    电影列表页
    :param type: 电影类型,str类型
    :return:
    """
    return render_template('content/display.htm')


@cinema_blueprint.route('/tv_display/<string:kind>/', methods=['GET'])
def tv_display(kind):
    """
    电视剧列表页
    :param type: 电视剧类型,str类型
    :return:
    """
    return render_template('content/display.htm')


@cinema_blueprint.route('/show_display/<string:kind>/', methods=['GET'])
def show_display(kind):
    """
    综艺列表页
    :param type: 电视剧类型,str类型
    :return:
    """
    return render_template('content/display.htm')


@cinema_blueprint.route('/animation_display/<string:kind>/', methods=['GET'])
def animation_display(kind):
    """
    电视剧列表页
    :param type: 电视剧类型,str类型
    :return:
    """
    return render_template('content/display.htm')


@cinema_blueprint.route('/fuli_display/<string:kind>/', methods=['GET'])
def fuli_display(kind):
    """
    电视剧列表页
    :param type: 电视剧类型,str类型
    :return:
    """
    return render_template('content/display.htm')


@cinema_blueprint.route('/search/', methods=['GET'])
def search():
    """
    搜索页
    :return:
    """
    return render_template('content/search.htm')
