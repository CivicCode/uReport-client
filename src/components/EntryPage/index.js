import React from 'react';

import ServiceListQuery from '../ServiceListQuery';
import './index.css';

const EntryPage = () => {
  return (
    <div className="EntryPage">
      <div className="container">
        <ServiceListQuery />
      </div>
    </div>
  );
};

export default EntryPage;
