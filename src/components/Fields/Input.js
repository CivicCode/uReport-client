import React from 'react';

const Input = ({code, description}) => {
  return (
    <div className="Input">
      <label>
        {description}:
      </label>
      <input type="text" name={code} />
    </div>
  );
};

export default Input;
