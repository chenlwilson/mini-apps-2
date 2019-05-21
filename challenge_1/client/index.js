import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import mockData from '../data/mock.js';

ReactDOM.render(<App mockData={mockData} />,
  document.getElementById('app'));
