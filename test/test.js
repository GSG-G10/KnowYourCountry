/* eslint-disable no-undef */
const supertest = require('supertest');
const filterData = require('../src/filterData');
const server = require('../src/server');

describe('filterData', () => {
  const testData = ['Yemen', 'Zambia', 'Zimbabwe', 'United Arab Emirates', 'United Kingdom', 'United States'];
  test('search with value "Z" and return multiple answers', () => {
    const expected = ['Zambia', 'Zimbabwe'];
    const actual = filterData('Z', testData);
    expect(actual).toEqual(expected);
  });
});

describe('server', () => {
  test('search with value "Yemen" and return multiple answers', (done) => {
    expect.assertions(1);
    supertest(server)
      .get('/search?q=YeMeN')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(JSON.parse(res.text)[0]).toBe('Yemen');
        return done();
      });
  });
});
