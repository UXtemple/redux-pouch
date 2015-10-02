import {
  FEED_CHANGE,
  FEED_COMPLETE,
  FEED_PAUSED,
  FEED_ERROR,
  SYNC_CHANGE,
  SYNC_PAUSED,
  SYNC_ACTIVE,
  SYNC_DENIED,
  SYNC_COMPLETE,
  SYNC_ERROR
} from './actions';

export default function pouchify(reducer, db = reducer.name) {
  return (state, action) => {

    switch(action.type) {
      case FEED_CHANGE:
      case FEED_COMPLETE:
      case FEED_PAUSED:
      case FEED_ERROR:
      case SYNC_CHANGE:
      case SYNC_PAUSED:
      case SYNC_ACTIVE:
      case SYNC_DENIED:
      case SYNC_COMPLETE:
      case SYNC_ERROR:
      if (action.payload.db === db) {
        return reducer(state, action);
      }
    }

    return reducer(state, action);

  };
}
