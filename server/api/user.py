from flask_restx import Namespace, Resource, fields
from db.database import get_db
from flask import request

user_api = Namespace('users', description='User operations')

user_model = user_api.model('User', {
    'first_name': fields.String(required=True, description='The user\'s first name'),
    'last_name': fields.String(required=True, description='The user\'s last name'),
    'email': fields.String(required=True, description='The user\'s email address'),
    'dob': fields.Date(required=True, description='The user\'s date of birth'),
    'password': fields.String(required=True, description='The user\'s password'),
})

login_model = user_api.model('Login', {
    'email': fields.String(required=True, description='The user\'s email address'),
    'password': fields.String(required=True, description='The user\'s password'),
})

flashcard_model = user_api.model('Flashcard', {
    'question': fields.String(required=True, description='the question'),
    'answer': fields.String(required=True, description='the answer'),
    'email': fields.String(required=True, description='The user\'s email address'),
})

@user_api.route('/flashcards')
class FlashcardsByUser(Resource):
    def get(self):
        """Retrieve all flashcards for a given user"""
        user_email = request.args.get('email')  # Get email from query parameters
        if not user_email:
            return {'message': 'Email parameter is required.'}, 400

        db = get_db()
        flashcards = list(db.flashcards.find({'email': user_email}))

        # Convert ObjectId to string in the response
        for flashcard in flashcards:
            flashcard['_id'] = str(flashcard['_id'])

        if flashcards:
            return {'flashcards': flashcards}, 200
        else:
            return {'message': 'No flashcards found for this user.'}, 404

    @user_api.expect(flashcard_model)
    @user_api.response(201, 'Flashcard successfully created.')
    @user_api.response(400, 'Validation Error')
    def post(self):
        """Create a new flashcard"""
        data = request.json
        print(data)
        db = get_db()
        result = db.flashcards.insert_one(data)
        flashcard = db.flashcards.find_one({'_id': result.inserted_id})

        # Convert ObjectId to string if needed when returning the flashcard
        if flashcard:
            flashcard['_id'] = str(flashcard['_id'])
            return flashcard, 201
        else:
            return {'message': 'Failed to fetch created flashcard.'}, 500 # Handle unlikely case of insertion failure

        



@user_api.route('/create_account')
class ByEmail(Resource):
    @user_api.expect(user_model)
    @user_api.response(201, 'Account successfully created.')
    @user_api.response(400, 'Validation Error')
    def post(self):
        """Create a new user"""
        data = request.json
        db = get_db()
        result = db.user.insert_one(data)
        return {'message': 'Account created successfully.', 'user_id': str(result.inserted_id)}, 201
    

@user_api.route('/login')
class Login(Resource):
    @user_api.expect(login_model)
    @user_api.response(200, 'Login successful.')
    @user_api.response(401, 'Unauthorized')
    def post(self):
        """Login user"""
        data = request.json
        email = data.get('email')
        password = data.get('password')

        db = get_db()
        user = db.user.find_one({'email': email, 'password': password})

        if user:
            return {'message': 'Login successful.', 'email': str(user['email'])}, 200
        else:
            return {'message': 'Unauthorized'}, 401