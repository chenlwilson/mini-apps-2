import React from 'react';
import $ from 'jquery';
import Search from './Search.jsx';
import Events from './Events.jsx';
import Page from './Page.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.loadData = this.loadData.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.sendSearch = this.sendSearch.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);

    this.state = {
      events: [],
      word: '',
      currentPage: [1, 2, 3],
    };
  }

  componentDidMount() {
    const { currentPage } = this.state;
    this.loadData(currentPage);
  }

  loadData(pageNumber) {
    $.ajax({
      url: `/events?_page=${pageNumber}&_limit=10`,
      type: 'GET',
      contentType: 'application/json',
    })
      .done((res) => {
        console.log(res);
        this.setState({
          events: res,
        });
      })
      .fail(() => {
        console.log('fail to get events from db.json');
      });
  }

  updateSearch(e) {
    this.setState({
      word: e.target.value,
    });
  }

  sendSearch(e) {
    e.preventDefault();
    const { word } = this.state;
    $.ajax({
      url: `/events?q=${word}`,
      type: 'GET',
      contentType: 'application/json',
    })
      .done((res) => {
        console.log(res);
        this.setState({
          events: res,
        });
      })
      .fail(() => {
        console.log('fail to get search results from db.json');
      });
  }

  nextPage() {
    const { currentPage } = this.state;
    const next = currentPage[currentPage.length - 1] + 1;
    const updated = currentPage.slice(1).concat(next);

    this.setState({
      currentPage: updated,
    });
  }

  prevPage() {
    const { currentPage } = this.state;
    if (currentPage[0] !== 1) {
      const prev = currentPage[0] - 1;
      const updated = [prev].concat(currentPage.slice(0, currentPage.length - 1));
      this.setState({
        currentPage: updated,
      });
    }
  }

  render() {
    const { events, word, currentPage } = this.state;
    return (
      <div className="mb-5">
        <Search word={word} updateSearch={this.updateSearch} sendSearch={this.sendSearch} />
        <Page currentPage={currentPage} loadData={this.loadData} nextPage={this.nextPage} prevPage={this.prevPage} />
        <Events events={events} />
        <Page currentPage={currentPage} loadData={this.loadData} nextPage={this.nextPage} prevPage={this.prevPage} />
      </div>
    );
  }
}
