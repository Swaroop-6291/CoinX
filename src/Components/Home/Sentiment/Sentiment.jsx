import React from 'react';
import './Sentiment.css';
import Event from './Event';
import BarChart from './BarChart';

const Sentiment = () => {
  return (
    <div className="sentiment">
      <h1>Sentiment</h1>
      <h3>Key Events</h3>
      <div className="event">
        <Event />
        <Event />
      </div>
      <h3>Analyst Estimates</h3>
      <BarChart />
    </div>
  );
};

export default Sentiment;
