// тут описаны action'ы
export const updateIds = (arr) => {
  return {
    type: 'UPDATE_IDS',
    ids: arr,
  };
};
export const updateCurrentData = (obj) => {
  return {
    type: 'UPDATE_CURRENT_DATA',
    currentData: obj,
  };
};
export const loading = (bool) => {
  return {
    type: 'LOADING',
    loading: bool,
  };
};