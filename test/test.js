const schema = require('../database/schema');
test('test fetchimage', ()=>{
  results = [];
  results.push(schema.fetchImage());
  Promise.all(results).then((results)=>{
    expect(typeof results[0]).to.equal('object');
  });
});

// test("test seeding script",()=>{

// })