const fetch = require('node-fetch');

describe('server tests', () => {
  beforeEach(() => {
    jest.setTimeout(5000);
  });

  test('test to see if server works', () => {
    return fetch('http://localhost:3000').then((data) => {
      expect(!!data).toBe(true);
    });
  });

  test('check to see that the route fetches data from mongodb', () => {
    return fetch('http://localhost:3000/artists').then((response) => {
      return response.json();
    }).then((data) => {
      expect(data.length).toEqual(100);
    });
  });
});
