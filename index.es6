export { FEED_CHANGE } from './actions';
export { POUCH_DB } from './middleware';

import adapter from './adapter';
const methods = {};
Object.keys(adapter).forEach(key => methods[key] = key);
export { methods };

export changes from './changes';
export pouchify from './pouchify';

export default from './middleware';
