# from flask import Flask, redirect, url_for
# from flask_migrate import Migrate
# from db import db

# #Flask app initialization
# app = Flask(_name_)
# app.secret_key = "Lucky7"

# # App configuration settings (including database URI)
# app.config['SQLALCHEMY_DATABASE_URI'] = ""
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# # Initialize SQLAlchemy and Flask-Migrate with the app
# db.init_app(app)
# migrate = Migrate(app, db) 

# with app.app_context():
#     db.create_all()

# from boundary.home import home_app
# app.register_blueprint(home_app)


# # Redirect root URL 
# @app.route('/')
# def default_route():
#     return redirect(url_for('home_app.homePage'))

# if __name__ == "__main__":
#     app.run(debug=True)

from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, Flask!"

if __name__ == 'main':
    app.run(debug=True)
