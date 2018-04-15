import React from 'react';

const DropDown = ({field}) => {
  const { code, description, values } = field;
  return (
    <div className="DropDown">
      <label>
        {description}:
      </label>
      <select>
        {values.map(
          value => (
            <option value={value.key}>{value.name}</option>
          )
        )}
      </select>
    </div>
  );
};

export default DropDown;
