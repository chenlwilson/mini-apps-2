import { connect } from 'react-redux';
import Search from '../components/Search.jsx';
import updateSearch from '../actions/updateSearch.js';
import fetchSearch from '../actions/fetchSearch.js';

const mapStateToProps = state => ({
  word: state.word,
});

const mapDispatchToProps = dispatch => ({
  updateSearch: (e) => {
    dispatch(updateSearch(e));
  },
  fetchSearch: (e) => {
    dispatch(fetchSearch(e));
  },
});

const searchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default searchContainer;
