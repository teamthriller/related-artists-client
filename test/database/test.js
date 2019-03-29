const schema = require('../../src/database/schema');

test('test fetchimage', () => {
  const results = [];
  results.push(schema.fetchImage());
  Promise.all(results).then((data) => {
    expect(typeof data[0]).toEqual('object');
  });
});

// test("test seeding script",()=>{

// });
