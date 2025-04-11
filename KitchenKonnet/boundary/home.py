from flask import render_template, request, Blueprint, session, redirect, url_for

# Define a Blueprint for the login functionality
UserLogin_app = Blueprint('home_app', __name__)

@UserLogin_app.route('/home', methods=['POST', 'GET'])
def home():
    return render_template('homePage.html')

