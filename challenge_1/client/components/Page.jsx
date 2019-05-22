import React from 'react';
import { Pagination } from 'react-bootstrap';

const Page = ({ options }) => (
  <Pagination
    variant="success"
    size="sm"
    className="mt-4 mb-2 justify-content-md-center"
  >
    <Pagination.Prev onClick={options.loadPrevPage}>Previous</Pagination.Prev>
    {options.pages.map(p => (
      <Pagination.Item
        className={p === options.pages[options.currentIndex] ? 'active' : ''}
        onClick={() => { options.loadData(p); }}
      >
        {p}
      </Pagination.Item>
    ))}
    <Pagination.Next onClick={options.loadNextPage}>Next</Pagination.Next>
  </Pagination>
);

export default Page;
