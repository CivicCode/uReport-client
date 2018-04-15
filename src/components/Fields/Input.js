import React from 'react';

const Input = ({code, description}) => {
  return (
    <label>
      {description}:
      <input type="text" name={code} />
    </label>
  );
};

export default Input;
