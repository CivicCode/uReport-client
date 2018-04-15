import React from 'react';

const Input = ({ field }) => {
  const { code, description } = field;
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
