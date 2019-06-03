import { connect } from 'react-redux';
import Page from '../components/Page.jsx';
import loadData from '../actions/loadData.js';
import loadNextPage from '../actions/loadNextPage.js';
import loadPrevPage from '../actions/loadPrevPage.js';

const mapStateToProps = state => ({
  currentPage: state.currentPage,
});

const mapDispatchToProps = dispatch => ({
  loadData: (pageNumber) => {
    dispatch(loadData(pageNumber));
  },
  loadNextPage: () => {
    dispatch(loadNextPage());
  },
  loadPrevPage: () => {
    dispatch(loadPrevPage());
  },
});

const pageContainer = connect(mapStateToProps, mapDispatchToProps)(Page);

export default pageContainer;
