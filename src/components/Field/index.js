import React from 'react';

import { DropDown, Input, Media, TextArea } from '../Fields';

import './index.css';

const Field = ({field}) => {
  const getField = field => {
    const map = {
      string: <Input key={field.code} field={field} />,
      number: <Input key={field.code} field={field} />,
      datetime: <Input key={field.code} field={field} />,
      text: <TextArea key={field.code} field={field} />,
      singlevaluelist: <DropDown key={field.code} field={field} />,
      multivaluelist: null,
      media: <Media key={field.code} field={field} />
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
