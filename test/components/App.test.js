// tests for App react component
const React = require('react');
const { configure, mount } = require('enzyme');
const fetch = require('node-fetch');
const Adapter = require('enzyme-adapter-react-15');
const App = require('../../src/client/components/App.jsx');
// const ArtistList = require('../../src/client/components/ArtistList.jsx');
// const Artist = require('../../src/client/components/Artist.jsx');
// const sinon = require('sinon');

configure({ adapter: new Adapter() });

test('test that state is updated after a time', () => {
  global.fetch = fetch;
  return new Promise((resolve, reject) => {
    const AppComponent = App.default;
    const wrap = mount(<AppComponent />);
    setTimeout(resolve.bind(null, wrap), 1000);
  }).then((wrap) => {
    // console.log(wrap.state());
    const expected = {
      artistid: '1',
      artistinfo: {
        _id: '1',
        name: '1',
        bio: 'bio of 1',
        image: 'https://images.unsplash.com/photo-1544597980-426873210008?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=480&fit=crop&ixid=eyJhcHBfaWQiOjF9',
        __v: 0,
        relatedartists: [2, 21],
      },
    };
    expect(wrap.state()).toEqual(expected);
  });
});

test('check state of artistlist', () => {
});
