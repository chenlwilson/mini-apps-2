import React from 'react';
import {
  Navbar, Button, InputGroup, FormControl,
} from 'react-bootstrap';

const Search = ({ word, updateSearch, fetchSearch }) => (
  <Navbar bg="secondary">
    <Navbar.Brand className="ml-5 mt-4 mb-4">Historical Events</Navbar.Brand>

    <InputGroup className="mr-5">
      <FormControl
        placeholder="history is waiting..."
        type="text"
        value={word}
        onChange={(e) => { updateSearch(e); }}
      />
      <InputGroup.Append>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => { fetchSearch(e); }}
        >
        search
        </Button>
      </InputGroup.Append>
    </InputGroup>

  </Navbar>
);

export default Search;
