const wordReducer = (state = '', action) => {
  if (action.type === 'word') {
    return action.word;
  }
  return state;
};

export default wordReducer;
