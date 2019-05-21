import React from 'react';

const Events = ({ events }) => (
  <div>
    {events.map(e => (
      <div>
        <div>{e.date}</div>
        <div>{e.category2}</div>
        <div>{e.description}</div>
      </div>
    ))}

  </div>
);

export default Events;
