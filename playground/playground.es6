import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Boxes from './boxes/component';
import configureStore from './configure-store';
import feeds from './feeds';
import React from 'react';

const store = configureStore();
const changeFeeds = feeds(store);

render(
  <Provider store={store}>
    <Boxes />
  </Provider>,
  document.getElementById('root')
);
