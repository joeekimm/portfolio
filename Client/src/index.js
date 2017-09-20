import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';

const renderApp = () => {
  ReactDOM.render(<Router/>, document.getElementById('app'));
}

if (module.hot) {
  console.log('module is hot, but not in the accept callback');
  module.hot.accept('./Router', () => {
    console.log('inside accept callback');
    renderApp();
  });
} else {
  renderApp();
}