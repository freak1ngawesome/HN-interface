import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import store from '../../store';

it('No crush, please...',() => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, div);
});