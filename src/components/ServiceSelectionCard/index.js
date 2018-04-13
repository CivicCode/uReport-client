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
            <Link to={{
              pathname: `/form/${item.service_name}`,
              state: {
                service_code: item.service_code
              }
            }}>
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
