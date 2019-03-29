// tests for App react component
const React = require('react');
const { configure, shallow } = require('enzyme');
const sinon = require('sinon');

const Adapter = require('enzyme-adapter-react-15');
const { App } = require('../../src/client/components/App.jsx');


configure({ adapter: new Adapter() });

// console.log(shallow);

test('Should render App Component', () => {
  const wrapper = shallow(<App />);
  var text=wrapper.text();
  expect(text).toEqual('Hi from react app');
});
