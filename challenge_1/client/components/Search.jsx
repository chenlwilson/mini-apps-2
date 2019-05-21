import React from 'react';

const Search = ({ word, updateSearch, sendSearch }) => (
  <form>
    <input type="text" value={word} onChange={(e) => { updateSearch(e); }} />
    <button type="submit" onClick={(e) => { sendSearch(e); }}>search</button>
  </form>
);

export default Search;
