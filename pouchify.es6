import { FEED_CHANGE } from './actions';

export default function pouchify(reducer, db = reducer.name) {
  return function(state, action) {
    let nextState = state;

    if ((action.type === FEED_CHANGE && action.payload.db === db) || action.type !== FEED_CHANGE) {
      nextState = reducer(state, action);
    }

    return nextState;
  };
}
