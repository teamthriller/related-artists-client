// tests for App react component
const React = require('react');
const { configure, mount } = require('enzyme');
const fetch = require('node-fetch');
const Adapter = require('enzyme-adapter-react-15');
const styled = require('styled-components');
const renderer = require('react-test-renderer');
const App = require('../../src/client/components/App.jsx');
const ArtistList = require('../../src/client/components/ArtistList.jsx');
// const sinon = require('sinon');


configure({ adapter: new Adapter() });

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
