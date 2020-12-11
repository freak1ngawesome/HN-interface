// изначальное состояние
const initialState = {
  ids: [], // массив id последних 100 постов
  currentData: {}, // объект с данными по открытой новости
  loading: true, // состояние загрузки/обновения данных
};
// описание reducer'а
const reducer = (state = initialState, action) => {
  switch (action.type){
    case 'UPDATE_IDS':{
      return {
        ...state,
        ids: action.ids,
      }
    }
    case 'UPDATE_CURRENT_DATA':{
      return {
        ...state,
        currentData: action.currentData,
      }
    }
    case 'LOADING':{
      return {
        ...state,
        loading: action.loading,
      }
    }
    default:
      return state;
  }
}

export default reducer;// экспорт reduser'а