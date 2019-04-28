from flask import Blueprint, render_template

cinema_blueprint = Blueprint('cinema', __name__)


@cinema_blueprint.route('/index/', methods=['GET'])
def index():
    return render_template('content/index.htm')


@cinema_blueprint.route('/movie_details/<int:id>/', methods=['GET'])
def movie_detail(id):
    return render_template('content/detail.htm')


@cinema_blueprint.route('/fuli_details/<int:id>/', methods=['GET'])
def fuli_detail(id):
    return render_template('content/detail.htm')


@cinema_blueprint.route('/tv_list_details/<string:name>/', methods=['GET'])
def tv_detail(name):
    return render_template('content/list_detail.htm')


@cinema_blueprint.route('/animation_details/<string:name>/', methods=['GET'])
def animation_detail(name):
    return render_template('content/list_detail.htm')


@cinema_blueprint.route('/show_details/<string:name>/', methods=['GET'])
def show_detail(name):
    return render_template('content/list_detail.htm')
