const React = require('react');
const { configure, mount } = require('enzyme');
const fetch = require('node-fetch');
const Adapter = require('enzyme-adapter-react-15');
const App = require('../../src/client/components/App.jsx');
const ArtistList = require('../../src/client/components/ArtistList.jsx');
const ArtistMenu = require('../../src/client/components/ArtistMenu.jsx');


configure({ adapter: new Adapter() });

const appfetch = () => {
  let dummydata = {
    _id: '2',
    name: '2',
    bio: 'bio of 2',
    image: 'https://images.unsplash.com/photo-1532498797808-9b734f29e551?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=480&fit=crop&ixid=eyJhcHBfaWQiOjF9',
    relatedartists: [3, 22],
    __v: 0,
  };
  return new Promise((resolve) => {
    resolve({ json: () => { return dummydata; } });
  });
};

const relatedfetch = (search) => {
  let dummydata = {};
  const id = parseInt(search.split('=')[1], 10);
  if (id === 3) {
    dummydata = {
      _id: '3',
      name: '3',
      bio: 'bio of 3',
      image: 'https://images.unsplash.com/photo-1517706355179-794182e1e0d4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=480&fit=crop&ixid=eyJhcHBfaWQiOjF9',
      relatedartists: [4, 23],
      __v: 0,
    };
  } else {
    dummydata = {
      _id: '22',
      name: '22',
      bio: 'bio of 22',
      image: 'https://images.unsplash.com/photo-1519643225200-94e79e383724?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=480&fit=crop&ixid=eyJhcHBfaWQiOjF9',
      relatedartists: [23, 42],
      __v: 0,
    };
  }
  return new Promise((resolve) => {
    resolve({ json: () => { return dummydata; } });
  });
};

// dom tree tests.

test('check that App dom element exists', () => {
  global.fetch = appfetch;
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
  global.fetch = relatedfetch; // need to redefine fetch as node doesn't have fetch defined
  const Component = ArtistList.default;
  return new Promise((resolve) => {
    const wrap = mount(<Component artist={{ relatedartists: [3, 22] }} size={{ width: '25%', height: '25%' }} />);
    setTimeout(resolve.bind(null, wrap), 1000);
  }).then((wrap) => {
    wrap.update();
    expect(wrap.find('ArtistList').name()).toEqual('ArtistList');
    wrap.unmount();
  });
});

test('check that ArtistList renders 2 related artists', () => {
  global.fetch = relatedfetch; // need to redefine fetch as node doesn't have fetch defined
  const Component = ArtistList.default;
  return new Promise((resolve) => {
    const wrap = mount(<Component artist={{ relatedartists: [3, 22] }} size={{ width: '25%', height: '25%' }} />);
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
    expect(wrap.find('div').length).toEqual(5);
    wrap.unmount();
  });
});

// event tests

test('should render menu after event click', () => {
  global.fetch = fetch;
  // const preventDefault = { preventDefault: () => {} };
  const AppComponent = App.default;
  return new Promise((resolve) => {
    const wrap = mount(<AppComponent />);
    setTimeout(resolve.bind(null, wrap), 1000);
  }).then((wrap) => {
    wrap.update();
    return new Promise((resolve) => {
      wrap.find('Artist').at(0).childAt(0).childAt(0)
        .simulate('contextmenu', { preventDefault: () => {} });
      setTimeout(resolve.bind(null, wrap), 1000);
    }).then((newwrap) => {
      newwrap.update();
      expect(newwrap.find('ArtistMenu').length).toEqual(1);
      newwrap.unmount();
    });
  });
});
