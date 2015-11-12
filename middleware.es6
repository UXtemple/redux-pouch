import adapter from './adapter';
import invariant from 'invariant';
import PouchDB from 'pouchdb';

const RESET_LOADING_STATE = 'RESET_LOADING_STATE';

// Action key that carries API call info interpreted by this Redux middleware.
export const POUCH_DB = 'redux-puch/middleware/POUCH_DB'; // Symbol('Pouchdb');

export default function pouchMiddleware(store) {
  return next => action => {
    const { [POUCH_DB]: pouchAPI } = action.payload || {};

    if (typeof pouchAPI === 'undefined') {
      return next(action);
    }

    const { method, db } = pouchAPI;
    invariant(typeof method === 'string', 'Expected a PouchDB method');
    // invariant(db instanceof PouchDB, 'Expected a PouchDB instance');

    // Dispatch again for redux-promise
    return store.dispatch({
      ...action,
      type: action.type,
      payload: adapter[method](db, action.meta)
    });
  };
}
