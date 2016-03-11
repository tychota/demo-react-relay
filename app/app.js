'use strict';

const React = require('react');
const ReactDOM = require('react-dom');


const App = React.createClass({
  render: function() {
    return React.createElement('div', { }, "Hello, world.");
  }
});

ReactDOM.render(React.createElement(App), document.getElementById("example"));
