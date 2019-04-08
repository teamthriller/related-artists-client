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
    const expected = {
      _id: '2',
      name: '2',
      bio: 'bio of 2',
      image: 'https://images.unsplash.com/photo-1532498797808-9b734f29e551?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=480&fit=crop&ixid=eyJhcHBfaWQiOjF9',
      __v: 0,
      relatedartists: [3, 22],
    };
    expect(data).toEqual(expected);
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
