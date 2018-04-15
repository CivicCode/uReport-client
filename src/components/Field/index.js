import React from 'react';

import { Input, TextArea } from '../Fields';

import './index.css';

const Field = ({field}) => {
  const getField = field => {
    const map = {
      string: <Input key={field.code} code={field.code} datatype_description={field.datatype_description} />,
      number: <Input key={field.code} code={field.code} datatype_description={field.datatype_description} />,
      datetime: <Input key={field.code} code={field.code} datatype_description={field.datatype_description} />,
      text: <TextArea key={field.code} code={field.code} datatype_description={field.datatype_description} />,
      singlevaluelist: null,
      multivaluelist: null
    };

    return map[field.datatype];
  }

  return (
    <div className="Field">
      {getField(field)}
    </div>
  );
};

export default Field;
