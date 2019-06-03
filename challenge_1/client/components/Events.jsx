import React from 'react';
import { Table } from 'react-bootstrap';

const Events = ({ events }) => (
  <Table hover striped className="mt-2 ml-2 mr-5">
    <thead>
      <tr>
        <th className="col-date">Date</th>
        <th className="col-place">Place</th>
        <th className="col-event">Event</th>
      </tr>
    </thead>
    <tbody>
      {events.map(e => (
        <tr>
          <td>{e.date.indexOf('-') === -1 ? e.date.split('/').join('-') : `${e.date.slice(1)} BC`}</td>
          <td>{e.category2}</td>
          <td>{e.description}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default Events;
