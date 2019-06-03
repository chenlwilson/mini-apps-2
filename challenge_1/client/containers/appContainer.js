import { connect } from 'react-redux';
import App from '../components/App.jsx';
import loadData from '../actions/loadData.js';

const mapDispatchToProps = dispatch => ({
  loadData: (pageNum) => {
    dispatch(loadData(pageNum));
  },
});

const appContainer = connect(null, mapDispatchToProps)(App);

export default appContainer;
