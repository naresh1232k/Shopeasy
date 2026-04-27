const request = require('supertest');

const {app, server, name } = require('./app');

describe('GET /', () => {
  it('should return a 200 status code', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe(`Welcome to Shopeasy, ${name}!`);
  });
});

afterAll((done) => {
  server.close(() => {
    done();
  });
});
