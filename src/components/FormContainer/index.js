import React from 'react';

import FormQuery from '../FormQuery';
import './index.css';

const FormContainer = ({match, location}) => (
  <div className="FormContainer">
    <div className="container">
      <FormQuery
        match={match}
        location={location}
      />
    </div>
  </div>
);

export default FormContainer;
