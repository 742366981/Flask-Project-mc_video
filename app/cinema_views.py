from flask import Blueprint, render_template

cinema_blueprint = Blueprint('cinema', __name__)


@cinema_blueprint.route('/index/', methods=['GET'])
def index():
    return render_template('content/index.htm')


@cinema_blueprint.route('/detail/<int:id>', methods=['GET'])
def detail(id):
    return render_template('content/detail.htm')
