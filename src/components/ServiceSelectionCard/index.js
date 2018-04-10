import React from 'react';

import './index.css';

const ServiceSelectionCard = ({ group, serviceNames }) => (
  <div className="ServiceSelectionCard">
    <h3>{group}</h3>
    <ul>
    {serviceNames.map(item => (
      <li key={item.service_name}>
        <a href="#">{item.service_name}</a>
      </li>
    ))}
    </ul>
  </div>
);

export default ServiceSelectionCard;
