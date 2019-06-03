const eventsReducer = (state = [], action) => {
  if (action.type === 'events') {
    return action.events;
  }
  return state;
};

export default eventsReducer;
