import setPage from './setPage.js';

const loadPrevPage = () => (dispatch, getState) => {
  const prevPage = getState().currentPage - 1;
  dispatch(setPage(prevPage));
};

export default loadPrevPage;
