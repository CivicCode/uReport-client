import React from 'react';

const TextArea = ({code, datatype_description}) => {
  return (
    <label>
      {datatype_description}:
      <textarea type="text" name={code} />
    </label>
  );
};

export default TextArea;
