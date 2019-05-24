import React from 'react';
import { Pagination } from 'react-bootstrap';

const Page = ({ options }) => {
  const pageArray = options.currentPage <= 5
    ? new Array(10).fill(0).map((el, index) => index + 1)
    : new Array(10).fill(0).map((el, index) => options.currentPage + index - 5);

  return (
    <Pagination
      variant="success"
      size="sm"
      className="mt-4 mb-2 justify-content-md-center"
    >
      <Pagination.Prev onClick={options.loadPrevPage}>Previous</Pagination.Prev>
      {pageArray.map(p => (
        <Pagination.Item
          className={p === options.currentPage ? 'active' : ''}
          onClick={() => { options.loadData(p); }}
        >
          {p}
        </Pagination.Item>
      ))}
      <Pagination.Next onClick={options.loadNextPage}>Next</Pagination.Next>
    </Pagination>

  );
};


export default Page;
