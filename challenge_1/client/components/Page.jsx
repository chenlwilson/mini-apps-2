import React from 'react';
import { Pagination } from 'react-bootstrap';

const Page = () => (
  <Pagination variant="success" size="sm" className="mt-4 mb-2 justify-content-md-center">
    <Pagination.First />
    <Pagination.Prev />
    <Pagination.Item active>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Next />
    <Pagination.Last />
  </Pagination>
);

export default Page;
