const schema = require('../src/database/schema');
test('test fetchimage', ()=>{
  const results = [];
  results.push(schema.fetchImage());
  Promise.all(results).then((results)=>{
    expect(typeof results[0]).to.equal('object');
  });
});

// test("test seeding script",()=>{

// })