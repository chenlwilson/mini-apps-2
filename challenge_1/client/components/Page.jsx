import React from 'react';
import { Pagination } from 'react-bootstrap';

const Page = ({
  currentPage, loadData, nextPage, prevPage,
}) => (
  <Pagination
    variant="success"
    size="sm"
    className="mt-4 mb-2 justify-content-md-center"
  >
    <Pagination.First />
    <Pagination.Prev onClick={prevPage} />
    {currentPage.map(p => <Pagination.Item onClick={() => { loadData(p); }}>{p}</Pagination.Item>)}
    <Pagination.Next onClick={nextPage} />
    <Pagination.Last />
  </Pagination>
);

export default Page;
