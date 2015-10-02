export const FEED_CHANGE = 'redux-pouch/FEED_CHANGE';
export function feedChange({db, change}) {
  return {
    type: FEED_CHANGE,
    payload: {
      db,
      change
    }
  };
}

export const FEED_COMPLETE = 'redux-pouch/FEED_COMPLETE';
export function feedComplete({db, info}) {
  return {
    type: FEED_COMPLETE,
    payload: {
      db,
      info
    }
  };
}

export const FEED_PAUSED = 'redux-pouch/FEED_PAUSED';
export function feedPaused({db, info}) {
  return {
    type: FEED_PAUSED,
    payload: {
      db,
      info
    }
  };
}

export const FEED_ERROR = 'redux-pouch/FEED_ERROR';
export function feedError({db, error}) {
  return {
    type: FEED_ERROR,
    payload: {
      db,
      error
    }
  };
}

export const SYNC_CHANGE = 'redux-pouch/SYNC_CHANGE';
export function syncChange({db, info}) {
  return {
    type: SYNC_CHANGE,
    payload: {
      db,
      info
    }
  }
}

export const SYNC_PAUSED = 'redux-pouch/SYNC_PAUSED';
export function syncPaused({db}) {
  return {
    type: SYNC_PAUSED,
    payload: {
      db
    }
  }
}

export const SYNC_ACTIVE = 'redux-pouch/SYNC_ACTIVE';
export function syncActive({db}) {
  return {
    type: SYNC_ACTIVE,
    payload: {
      db
    }
  }
}

export const SYNC_DENIED = 'redux-pouch/SYNC_DENIED';
export function syncDenied({db, info}) {
  return {
    type: SYNC_DENIED,
    payload: {
      db,
      info
    }
  }
}

export const SYNC_COMPLETE = 'redux-pouch/SYNC_COMPLETE';
export function syncComplete({db, info}) {
  return {
    type: SYNC_COMPLETE,
    payload: {
      db,
      info
    }
  }
}

export const SYNC_ERROR = 'redux-pouch/SYNC_ERROR';
export function syncError({db, error}) {
  return {
    type: SYNC_ERROR,
    payload: {
      db,
      error
    }
  }
}

