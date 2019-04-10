const schema = require('../../src/database/schema');

// test('test fetchimage', () => {
//   return schema.fetchImage().then((data) => {
//     expect(typeof data).toEqual('string');
//   });
//   // jest.setTimeout(10000);
//   // const results = [];
//   // results.push(schema.fetchImage());
//   // return Promise.all(results).then((data) => {
//   //   console.log(data);
//   //   expect(typeof data[0]).toEqual('string');
//   // });
// });

test('test get function', () => {
  return schema.getdata().then((data) => {
    expect(data.length).toEqual(100);
  });
});

test('test getting an artist', () => {
  return schema.getArtist('2').then((result) => {
    return result.toJSON();
  }).then((data) => {
    expect(data.name).toEqual('2');
    schema.db.connection.close();
  });
});

// test('getting a nonexistant artist should return null', () => {
//   return schema.getArtist().then((data) => {
//     console.log(data);
//   }).catch((err) => {
//     console.log(err);
//   });
// });
