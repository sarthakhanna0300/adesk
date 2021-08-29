import React from 'react';
import  AdvtCard from '../homepage-advt-component/homepage-advt'
import './advt-list.css';

export const AdvtList = props => (
  <div className="container">
    {props.advertisement.map(advertisement => (
      <AdvtCard key={advertisement.id} advertisement={advertisement} />
    ))}
  </div>
);