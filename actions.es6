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
