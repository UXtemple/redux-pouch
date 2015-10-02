import { feedChange } from './actions';

export default function changes(db, store) {
  db.changes({
    include_docs: true,
    live: true,
    since: 'now'
  }).on('change', change => store.dispatch(feedChange({db: db._db_name, change})))
}
