// tests for App react component
const React = require('react');
const { configure, shallow } = require('enzyme');

// const sinon = require('sinon');

const Adapter = require('enzyme-adapter-react-15');
const App = require('../../src/client/components/App.jsx');

configure({ adapter: new Adapter() });

test('Should render App Component', () => {
  const AppComponent = App.default;
  const wrapper = shallow(<AppComponent />);
  const text = wrapper.text();
  expect(text).toEqual('Hi from react app');
});
