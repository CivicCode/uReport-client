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
          <li key={item.service_name}>
            <Link to={`/form/${item.service_name}`}>
            {item.service_name}
            </Link>
          </li>
           )
      }
      </ul>
    </div>
  )
};

export default ServiceSelectionCard;
