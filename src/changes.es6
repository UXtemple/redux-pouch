import {
  feedChange,
  feedComplete,
  feedPaused,
  feedError
} from './actions';

export default function changes(db, options = {}, store) {
  db.changes(options)
  .on('change', change => store.dispatch(feedChange({
    db: db._db_name,
    change
  })))
  .on('complete', info => store.dispatch(feedComplete({
    db: db._db_name,
    info
  })))
  .on('paused', info => store.dispatch(feedPaused({
    db: db._db_name,
    info
  })))
  .on('error', error => store.dispatch(feedError({
    db: db._db_name,
    error
  })));
}
