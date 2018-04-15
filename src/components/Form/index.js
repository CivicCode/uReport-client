import React from 'react';

import Field from '../Field';

const Form = ({name, code, fields}) => (
  <div className="Form">
    <h1 className="headline">Report {name}</h1>
    <form action="#">
    {
      fields.map(field => <Field key={field.code} field={field} />)
    }
    <input type="submit" value="Submit" />
    </form>
  </div>
);

export default Form;
