from os import environ as env

from authlib.integrations.flask_client import OAuth
from dotenv import find_dotenv, load_dotenv
from flask import Flask
from flask_cors import CORS
from flask_restx import Api
from api.routes import SetupRoutes

load_dotenv(find_dotenv())

app = Flask(__name__)
api = Api(title='CoreRed API', version='1.0', description='API Documentation')
CORS(app)
SetupRoutes(app, api)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=env.get("PORT", 3000))