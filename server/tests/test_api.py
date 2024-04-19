import pytest
from unittest.mock import patch
from run import app 

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

@patch('db.database')
def test_create_account_success(mock_get_db, client):
    mock_db = mock_get_db.return_value
    mock_db.user.insert_one.return_value = type('obj', (object,), {'inserted_id': 'abc123'})
    response = client.post('/users/create_account', json={
        'first_name': 'John',
        'last_name': 'Doe',
        'email': 'john.doe@example.com',
        'dob': '1990-01-01',
        'password': 'securepassword123'
    })
    assert response.status_code == 201
    assert response.json == {'message': 'Account created successfully.', 'user_id': 'abc123'}

@patch('db.database')
def test_create_account_success(mock_get_db, client):
    mock_db = mock_get_db.return_value
    mock_db.user.insert_one.return_value = type('obj', (object,), {'inserted_id': 'abc123'})

    response = client.post('/users/create_account', json={
        'first_name': 'John',
        'last_name': 'Doe',
        'email': 'john.doe@example.com',
        'dob': '1990-01-01',
        'password': 'securepassword123'
    })

    assert response.status_code == 201
    assert response.json == {'message': 'Account created successfully.', 'user_id': 'abc123'}
x
@patch('db.database')
def test_login_success(mock_get_db, client):
    mock_db = mock_get_db.return_value
    mock_db.user.find_one.return_value = {'_id': 'abc123', 'email': 'john.doe@example.com', 'password': 'securepassword123'}

    response = client.post('/users/login', json={
        'email': 'john.doe@example.com',
        'password': 'securepassword123'
    })

    assert response.status_code == 200
    assert response.json == {'message': 'Login successful.', 'user_id': 'abc123'}

@patch('yourapplication.api.user.get_db')
def test_login_unauthorized(mock_get_db, client):
    mock_db = mock_get_db.return_value
    mock_db.user.find_one.return_value = None

    response = client.post('/users/login', json={
        'email': 'john.doe@example.com',
        'password': 'wrongpassword'
    })

    assert response.status_code == 401
    assert response.json == {'message': 'Unauthorized'}