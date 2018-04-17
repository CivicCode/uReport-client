import React from 'react';

import ServiceSelectionCard from '../ServiceSelectionCard';

import './index.css';

const ServiceSelection = ({groupedData}) => (
  <div className="ServiceSelection">
  {
    Object.keys(groupedData).map(keyName => (
      <ServiceSelectionCard
        key={keyName}
        group={keyName}
        serviceNames={groupedData[keyName]}
      />
    ))
  }
  </div>
);

export default ServiceSelection;
