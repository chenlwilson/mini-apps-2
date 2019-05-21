import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <form>
        <input type='text'></input>
        <button>search</button>
      </form>
      <div>{this.props.mockData[0].date}</div>
      <div>{this.props.mockData[0].category2}</div>
      <div>{this.props.mockData[0].description}</div>
    </div>

    )
  }
}

