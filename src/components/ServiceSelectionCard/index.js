import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import './index.css';

const ServiceSelectionCard = ({ group, serviceNames }) => {
  return (
    <div className="ServiceSelectionCard">
      <h3>{group}</h3>
      <ul>
      {
        serviceNames.map(item => 
          <Route 
            key={item.service_name}
            path={`/${item.service_name}`}
          >
            <p>{item.service_name}</p>
          </Route>)
      }
      </ul>
    </div>
  )
};

export default ServiceSelectionCard;
