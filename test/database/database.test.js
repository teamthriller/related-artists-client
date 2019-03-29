const schema = require('../../src/database/schema');

test('test fetchimage', () => {
  const results = [];
  results.push(schema.fetchImage());
  return Promise.all(results).then((data) => {
    expect(typeof data[0]).toEqual('string');
  });
});

test('test get function', () => {
  return schema.getdata().then((data) => {
    expect(data.length).toEqual(100);
  });
});
