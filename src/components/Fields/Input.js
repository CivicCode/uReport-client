import React from 'react';

const Input = ({code, datatype_description}) => {
  return (
    <label>
      {datatype_description}:
      <input type="text" name={code} />
    </label>
  );
};

export default Input;
