import React from 'react';
import { Table } from 'react-bootstrap';

const Events = ({ events }) => (
  <Table className="mt-2 ml-5 mr-5">
    <thead>
      <tr>
        <th>Date</th>
        <th>Place</th>
        <th>Event</th>
      </tr>
    </thead>
    <tbody>
      {events.map(e => (
        <tr>
          <td>{e.date.indexOf('-') === -1 ? e.date : `${e.date.slice(1)} BC`}</td>
          <td>{e.category2}</td>
          <td>{e.description}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default Events;
