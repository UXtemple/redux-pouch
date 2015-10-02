import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import pouchMiddleware from 'redux-pouch';
import promiseMiddleware from 'redux-promise';
import rootReducer from './reducers';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
});

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware,
  pouchMiddleware,
  loggerMiddleware
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept('./reducers', function() {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
