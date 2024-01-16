// __tests__/controllers/userController.test.js
const request = require('supertest');
const app = require('../../src/server');
const User = require('../../src/models/User');

describe('UserController', () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  test('should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        username: 'testuser',
        email: 'testuser@gmail.com',
        password: 'testpassword'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'User registered successfully.');
  });

    test('should get all users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);
    });
  // Add more tests for other UserController methods
});