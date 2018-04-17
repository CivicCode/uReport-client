import React from 'react';
import { Link } from 'react-router-dom'

import './index.css';

const ServiceSelectionCard = ({ group, serviceNames }) => (
  <div className="ServiceSelectionCard">
    <h3>{group}</h3>
    <ul>
    {
      serviceNames.map(item =>
        <li key={item.service_name}>
          <Link to={{
            pathname: `/form/code/${item.service_code}/name/${item.service_name}`,
            state: {
              metadata: item.metadata
            }
          }}>
          {item.service_name}
          </Link>
        </li>
         )
    }
    </ul>
  </div>
);

export default ServiceSelectionCard;
