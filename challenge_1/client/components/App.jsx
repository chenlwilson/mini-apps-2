import React from 'react';
import $ from 'jquery';
import Search from './Search.jsx';
import Events from './Events.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.updateSearch = this.updateSearch.bind(this);
    this.sendSearch = this.sendSearch.bind(this);

    this.state = {
      events: [],
      word: '',
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/events?_page=5&_limit=10',
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

  render() {
    const { events, word } = this.state;
    return (
      <div>
        <Search word={word} updateSearch={this.updateSearch} sendSearch={this.sendSearch} />
        <Events events={events} />
      </div>
    );
  }
}
