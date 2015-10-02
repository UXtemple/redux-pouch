import {
  syncChange,
  syncPaused,
  syncActive,
  syncDenied,
  syncComplete,
  syncError
} from './actions';

export default function sync(db, remote, options, store) {
  db.sync(db, remote, options)
  .on('change', info => store.dispatch(syncChange({
    db: db._db_name,
    info
  })))
  .on('paused', () => store.dispatch(syncPaused({
    db: db._db_name
  })))
  .on('active', () => store.dispatch(syncActive({
    db: db._db_name
  })))
  .on('denied', info => store.dispatch(syncDenied({
    db: db._db_name,
    info
  })))
  .on('complete', info => store.dispatch(syncComplete({
    db: db._db_name,
    info
  })))
  .on('error', error => store.dispatch(syncError({
    db: db._db_name,
    error
  })));

}
