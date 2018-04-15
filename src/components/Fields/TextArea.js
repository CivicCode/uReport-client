import React from 'react';

const TextArea = ({code, description}) => {
  return (
    <label>
      {description}:
      <textarea type="text" name={code} />
    </label>
  );
};

export default TextArea;
