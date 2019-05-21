import React from 'react';
import { Navbar } from 'react-bootstrap';

const Search = ({ word, updateSearch, sendSearch }) => (
  <Navbar bg="info">
    <Navbar.Brand>Historical Events</Navbar.Brand>
    <input type="text" value={word} onChange={(e) => { updateSearch(e); }} />
    <button type="submit" onClick={(e) => { sendSearch(e); }}>search</button>
  </Navbar>
);

export default Search;
