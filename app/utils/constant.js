export const sortByName = (a, b, sortType) => {
  let first = a.nameDisplay;
  let second = b.nameDisplay;
  if (sortType) {
    if (first < second) {
      return -1;
    }
    if (first > second) {
      return 1;
    }
    return 0;
  }
  else {
    if (first > second) {
      return -1;
    }
    if (first < second) {
      return 1;
    }
    return 0;
  }
};
