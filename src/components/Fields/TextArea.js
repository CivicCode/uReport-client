import React from 'react';

const TextArea = ({code, description}) => {
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
