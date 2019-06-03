import setPage from './setPage.js';

const loadNextPage = () => (dispatch, getState) => {
  const nextPage = getState().currentPage + 1;
  dispatch(setPage(nextPage));
};

export default loadNextPage;
