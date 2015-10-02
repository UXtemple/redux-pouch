import 'core-js/modules/es6.array.find';
import { ADD, CLEAR, FETCH_ALL } from './actions';
import { name as dbName } from './db';
import { FEED_CHANGE, FEED_COMPLETE, FEED_ERROR, pouchify } from 'redux-pouch';
const NEXT = 'next';
const START = 'start';

// TODO normalisation
export function boxes(state=[], action) {
  switch(action.type) {
  case ADD:
    switch(action.sequence.type) {
    case START:
      return [...state, {
        ...action.meta,
        seqId: action.sequence.id,
        isSyncing: true
      }];
    case NEXT:
      // TODO sorting
      const rest = state.filter(box => box.seqId !== action.sequence.id);
      let nextBox = {
        ...state.find(box => box.seqId === action.sequence.id),
        isSyncing: false
      };

      if (action.error) {
        nextBox.error = action.payload;
      } else {
        nextBox = {
          ...nextBox,
          ...action.payload
        };
      }

      return [...rest, nextBox];
    }

  case CLEAR:
    return action.sequence.type === NEXT && !action.error ? [] : state;

  case FETCH_ALL:
    switch(action.sequence.type) {
    case START:
      return state;
    case NEXT:
      return action.payload;
    }

  case FEED_COMPLETE:
    console.log('complete');
    return state;

  // TODO @sven? :)
  case FEED_CHANGE:
    const changeBox = action.payload.change.doc;
    // TODO name comparison is a bit like cheating here but it illustrates the point
    // This has to be worked out in more depth anyway
    const rest = state.filter(box => box.name !== changeBox.name);
    const nextBox = state.find(box => box.name === changeBox.name);

    if (changeBox._deleted) {
      return rest;
    } else {
      return typeof nextBox === 'undefined' ?
        [...state, changeBox] :
        (typeof nextBox.seqId === 'undefined' ?
          [...rest, changeBox] :
          state);
    }

  default:
    return state;
  }
}

export default pouchify(boxes, dbName);
