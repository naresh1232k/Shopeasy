const request = require('supertest');

const {app, server } = require('./app');

describe('GET /', () => {
  it('should return a 200 status code', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Welcome to Shopeasy');
  });
});

afterAll((done) => {
  server.close(() => {
    done();
  });
});
