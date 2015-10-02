import { changes } from 'redux-pouch';
import db from './db';

let options = {
  include_docs: true,
  live: true,
  since: 'now'
};

export default function feed(store) {
  return changes(db, options, store);
}
