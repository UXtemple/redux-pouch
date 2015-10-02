import { changes } from 'redux-pouch';
import db from './db';

export default function feed(store) {
  return changes(db, store);
}
