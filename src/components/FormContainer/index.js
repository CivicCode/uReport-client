import React from 'react';

import FormQuery from '../FormQuery';
import './index.css';

const FormContainer = ({match}) => (
  <div className="FormContainer">
    <div className="container">
      <FormQuery
        match={match}
      />
    </div>
  </div>
);

export default FormContainer;
