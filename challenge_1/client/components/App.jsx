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
      pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      currentIndex: 0,
    };
  }

  componentDidMount() {
    this.loadData(1);
  }

  loadData(pageNumber) {
    const { pages } = this.state;
    const index = pages.indexOf(pageNumber) === -1 ? 9 : pages.indexOf(pageNumber);

    $.ajax({
      url: `/events?_page=${pageNumber}&_limit=10`,
      type: 'GET',
      contentType: 'application/json',
    })
      .done((res) => {
        console.log(res);
        this.setState({
          events: res,
          currentIndex: index,
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
    }
  }

  fetchSearch(e) {
    e.preventDefault();
    const { word, pages, currentIndex } = this.state;
    if (word.length > 1) {
      $.ajax({
        url: `/events?q=${word}&_page=${pages[currentIndex]}&_limit=10`,
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
  }

  loadNextPage() {
    const { pages, currentIndex } = this.state;
    if (currentIndex === pages.length - 1) {
      this.loadData(pages[pages.length - 1] + 1);
      const next = pages[currentIndex] + 1;
      const updated = pages.slice(1).concat(next);
      this.setState({
        pages: updated,
      });
    } else {
      this.loadData(pages[currentIndex + 1]);
      this.setState({
        currentIndex: currentIndex + 1,
      });
    }
  }

  loadPrevPage() {
    const { pages, currentIndex } = this.state;
    if (currentIndex === 0 && pages[currentIndex] > 1) {
      this.loadData(pages[0] - 1);
      const prev = pages[currentIndex] - 1;
      const updated = [prev].concat(pages.slice(0, pages.length - 1));
      this.setState({
        pages: updated,
      });
    } else if (currentIndex > 0) {
      this.loadData(pages[currentIndex - 1]);
      this.setState({
        currentIndex: currentIndex - 1,
      });
    }
  }

  render() {
    const {
      events, word, pages, currentIndex,
    } = this.state;

    const searchOptions = {
      word,
      updateSearch: this.updateSearch,
      fetchSearch: this.fetchSearch,
    };
    const pageOptions = {
      pages,
      currentIndex,
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
