import $ from 'jquery';
import setEvents from './setEvents.js';
import setPage from './setPage.js';

const loadData = pageNumber => (dispatch) => {
  $.ajax({
    url: `/events?_page=${pageNumber}&_limit=10`,
    type: 'GET',
    contentType: 'application/json',
  })
    .done((res) => {
      console.log(res);
      dispatch(setEvents(res));
      dispatch(setPage(pageNumber));
    })
    .fail(() => {
      console.log('fail to get events from db.json');
    });
};

export default loadData;
