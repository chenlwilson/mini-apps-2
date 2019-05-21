import React from 'react';
import { Pagination } from 'react-bootstrap';

const Page = ({ currentPage, loadData }) => (
  <Pagination
    variant="success"
    size="sm"
    className="mt-4 mb-2 justify-content-md-center"
  >
    <Pagination.First />
    <Pagination.Prev />
    {currentPage.map(p => <Pagination.Item onClick={() => { loadData(p); }}>{p}</Pagination.Item>)}
    <Pagination.Next />
    <Pagination.Last />
  </Pagination>
);

export default Page;
