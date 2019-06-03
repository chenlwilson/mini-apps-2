import { combineReducers } from 'redux';
import events from './eventsReducer.js';
import currentPage from './pageReducer.js';
import word from './wordReducer.js';

const rootReducer = combineReducers({
  events,
  currentPage,
  word,
});

export default rootReducer;
