import adapter from './src/adapter';

const methods = {};
Object.keys(adapter).forEach(key => methods[key] = key);

export { methods };
export {
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
} from './src/actions';
export { POUCH_DB } from './src/middleware';

export changes from './src/changes';
export pouchify from './src/pouchify';

export default from './src/middleware';
