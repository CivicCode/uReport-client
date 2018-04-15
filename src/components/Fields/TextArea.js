import React from 'react';

const TextArea = ({ field }) => {
  const { code, description } = field;
  return (
    <div className="TextArea">
      <label>
        {description}:
      </label>
      <textarea type="text" name={code} />
    </div>
  );
};

export default TextArea;
