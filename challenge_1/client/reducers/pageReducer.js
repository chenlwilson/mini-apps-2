const pageReducer = (state = 0, action) => {
  if (action.type === 'page') {
    return action.currentPage;
  }
  return state;
};

export default pageReducer;
