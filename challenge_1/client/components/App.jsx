import React from 'react';
import SearchContainer from '../containers/searchContainer.js';
import EventContainer from '../containers/eventsContainer.js';
import PageContainer from '../containers/pageContainer.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadData(1);
  }

  render() {
    return (
      <div className="mb-5">
        <SearchContainer />
        <PageContainer />
        <EventContainer />
        <PageContainer />
      </div>
    );
  }
}
