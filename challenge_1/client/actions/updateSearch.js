import setWord from './setWord.js';
import loadData from './loadData.js';

const updateSearch = (e) => {
  if (e.target.value.length === 0) {
    return (dispatch) => {
      dispatch(setWord(e.target.value));
      dispatch(loadData(1));
    };
  }
  return (dispatch) => {
    dispatch(setWord(e.target.value));
  };
};

export default updateSearch;
