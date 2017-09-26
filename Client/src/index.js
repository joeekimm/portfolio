import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

const renderApp = () => {
  ReactDOM.render(<App/>, document.getElementById('app'));
}

if (module.hot) {
  console.log('module is hot, but not in the accept callback');
  module.hot.accept('./Components/App', () => {
    console.log('inside accept callback');
    renderApp();
  });
} else {
  renderApp();
}