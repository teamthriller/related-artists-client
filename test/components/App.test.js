const React = require('react');
const { configure, mount } = require('enzyme');
const fetch = require('node-fetch');
const Adapter = require('enzyme-adapter-react-15');
const App = require('../../src/client/components/App.jsx');
const ArtistList = require('../../src/client/components/ArtistList.jsx');
const ArtistMenu = require('../../src/client/components/ArtistMenu.jsx');

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
    const wrap = mount(<Component artist={{ relatedartists: [2, 10] }} size={{ width: '25%', height: '25%' }} />);
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
    const wrap = mount(<Component artist={{ relatedartists: [2, 10] }} size={{ width: '25%', height: '25%' }} />);
    setTimeout(resolve.bind(null, wrap), 1000);
  }).then((wrap) => {
    wrap.update();
    expect(wrap.find('Artist').length).toEqual(2);
    wrap.unmount();
  });
});

test('check that the Artist Menu renders', () => {
  const Menu = ArtistMenu.default;
  return new Promise((resolve) => {
    const wrap = mount(<Menu pos={{ top: 0, left: 0 }} />);
    setTimeout(resolve.bind(null, wrap), 1000);
  }).then((wrap) => {
    wrap.update();
    expect(wrap.find('ul').length).toEqual(1);
    expect(wrap.find('li').length).toEqual(3);
    wrap.unmount();
  });
});

// event tests

test('should render menu after event click', () => {
  global.fetch = fetch;
  const AppComponent = App.default;
  return new Promise((resolve) => {
    const wrap = mount(<AppComponent />);
    setTimeout(resolve.bind(null, wrap), 1000);
  }).then((wrap) => {
    wrap.update();
    return new Promise((resolve) => {
      wrap.find('Artist').at(0).childAt(0).childAt(0).simulate('click');
      setTimeout(resolve.bind(null, wrap), 1000);
    }).then((newwrap) => {
      newwrap.update();
      expect(newwrap.find('ArtistMenu').length).toEqual(1);
      newwrap.unmount();
    });
  });
});
