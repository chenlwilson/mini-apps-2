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
    this.fetchSearch = this.fetchSearch.bind(this);
    this.loadNextPage = this.loadNextPage.bind(this);
    this.loadPrevPage = this.loadPrevPage.bind(this);

    this.state = {
      events: [],
      word: '',
      currentPage: 1,
      isSearching: false,
    };
  }

  componentDidMount() {
    this.loadData(1);
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
          currentPage: pageNumber,
          isSearching: false,
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

    if (e.target.value.length === 0) {
      this.loadData(1);
      this.setState({
        currentPage: 1,
      });
    }
  }

  fetchSearch(e) {
    e.preventDefault();
    const { word } = this.state;
    if (word.length > 1) {
      $.ajax({
        url: `/events?q=${word}`,
        type: 'GET',
        contentType: 'application/json',
      })
        .done((res) => {
          console.log(res);
          this.setState({
            events: res,
            currentPage: 1,
            isSearching: true,
          });
        })
        .fail(() => {
          console.log('fail to get search results from db.json');
        });
    }
  }

  loadNextPage() {
    const { currentPage } = this.state;
    this.loadData(currentPage + 1);
  }

  loadPrevPage() {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.loadData(currentPage - 1);
    }
  }

  render() {
    const {
      events, word, currentPage,
    } = this.state;

    const searchOptions = {
      word,
      updateSearch: this.updateSearch,
      fetchSearch: this.fetchSearch,
    };
    const pageOptions = {
      currentPage,
      loadData: this.loadData,
      loadNextPage: this.loadNextPage,
      loadPrevPage: this.loadPrevPage,
    };

    return (
      <div className="mb-5">
        <Search options={searchOptions} />
        <Page options={pageOptions} />
        <Events events={events} />
        <Page options={pageOptions} />
      </div>
    );
  }
}
