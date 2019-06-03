import { connect } from 'react-redux';
import Events from '../components/Events.jsx';

const mapStateToProps = state => ({
  events: state.events,
});

const eventsContainer = connect(mapStateToProps, null)(Events);

export default eventsContainer;
