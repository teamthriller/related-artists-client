// tests for App react component
const React = require('react');
const { configure, mount } = require('enzyme');
const fetch = require('node-fetch');
const Adapter = require('enzyme-adapter-react-15');
const styled = require('styled-components');
const { enzymeFind } = require('styled-components/test-utils');
const App = require('../../src/client/components/App.jsx');
const ArtistList = require('../../src/client/components/ArtistList.jsx');
const Artist = require('../../src/client/components/Artist.jsx');
// const sinon = require('sinon');


configure({ adapter: new Adapter() });

// state tests --------------------------------------------------------
// test('test that state is updated after a time', () => {
//   global.fetch = fetch;
//   return new Promise((resolve) => {
//     const AppComponent = App.default;
//     const wrap = mount(<AppComponent />);
//     setTimeout(resolve.bind(null, wrap), 1000);
//   }).then((wrap) => {
//     // console.log(wrap.state());
//     const expected = {
//       artistid: '1',
//       artistinfo: {
//         _id: '1',
//         name: '1',
//         bio: 'bio of 1',
//         image: 'https://images.unsplash.com/photo-1544597980-426873210008?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=480&fit=crop&ixid=eyJhcHBfaWQiOjF9',
//         __v: 0,
//         relatedartists: [2, 21],
//       },
//     };
//     expect(wrap.state()).toEqual(expected);
//   });
// });

// test('check that ArtistList correctly updates state', () => {
//   global.fetch = fetch; // need to redefine fetch as node doesn't have fetch defined
//   const Component = ArtistList.default;
//   return new Promise((resolve) => {
//     const wrap = mount(<Component artist={{ relatedartists: [2, 10] }} />);
//     setTimeout(resolve.bind(null, wrap), 1000);
//   }).then((wrap) => {
//     const expected = {
//       artists: [
//         {
//           _id: '2',
//           name: '2',
//           bio: 'bio of 2',
//           image: 'https://images.unsplash.com/photo-1532498797808-9b734f29e551?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=480&fit=crop&ixid=eyJhcHBfaWQiOjF9',
//           __v: 0,
//           relatedartists: [3, 22],
//         },
//         {
//           _id: '10',
//           name: '10',
//           bio: 'bio of 10',
//           image: 'https://images.unsplash.com/photo-1471171768346-d08fb2813c45?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=480&fit=crop&ixid=eyJhcHBfaWQiOjF9',
//           __v: 0,
//           relatedartists: [11, 30],
//         },
//       ],
//     };

//     expect(wrap.state()).toEqual(expected);
//     wrap.unmount();
//   });
// });


// dom tree tests.

test('check that App dom element exists', () => {
  global.fetch = fetch;
  const AppComponent = App.default;
  return new Promise((resolve) => {
    const wrap = mount(<AppComponent />);
    setTimeout(resolve.bind(null, wrap), 1000);
  }).then((wrap) => {
    // console.log(wrap.instance());
    expect(wrap.find('App').name()).toEqual('App');
    wrap.unmount(); // cleanup
  });
});

test('check that ArtistList is in the dom', () => {
  global.fetch = fetch; // need to redefine fetch as node doesn't have fetch defined
  const Component = ArtistList.default;
  return new Promise((resolve) => {
    const wrap = mount(<Component artist={{ relatedartists: [2, 10] }} />);
    setTimeout(resolve.bind(null, wrap), 1000);
  }).then((wrap) => {
    wrap.update();
    expect(wrap.find('ArtistList').name()).toEqual('ArtistList');
    wrap.unmount();
  });
});

test('check that ArtistList renders 2 related artists', () => {
  global.fetch = fetch; // need to redefine fetch as node doesn't have fetch defined
  const Component = ArtistList.default;
  return new Promise((resolve) => {
    const wrap = mount(<Component artist={{ relatedartists: [2, 10] }} />);
    setTimeout(resolve.bind(null, wrap), 1000);
  }).then((wrap) => {
    wrap.update();
    expect(wrap.find('Artist').length).toEqual(2);
    wrap.unmount();
  });
});


// styling tests
