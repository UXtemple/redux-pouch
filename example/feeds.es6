import boxes from './boxes/feed';

export default function feeds(store) {
  return {
    boxes: boxes(store)
  };
}
