const fetch = require('node-fetch');

test('test to see if server works', () => {
  return fetch('http://localhost:3000').then((data) => {
    expect(!!data).toBe(true);
  });
});
