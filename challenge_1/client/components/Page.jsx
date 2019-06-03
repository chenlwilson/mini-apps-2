import React from 'react';
import { Pagination } from 'react-bootstrap';

const Page = ({
  currentPage, loadPrevPage, loadNextPage, loadData,
}) => {
  const pageArray = currentPage <= 5
    ? new Array(10).fill(0).map((el, index) => index + 1)
    : new Array(10).fill(0).map((el, index) => currentPage + index - 5);

  return (
    <Pagination
      variant="success"
      size="sm"
      className="mt-4 mb-2 justify-content-md-center"
    >
      <Pagination.Prev onClick={loadPrevPage}>Previous</Pagination.Prev>
      {pageArray.map(p => (
        <Pagination.Item
          className={p === currentPage ? 'active' : ''}
          onClick={() => { loadData(p); }}
        >
          {p}
        </Pagination.Item>
      ))}
      <Pagination.Next onClick={loadNextPage}>Next</Pagination.Next>
    </Pagination>

  );
};


export default Page;
