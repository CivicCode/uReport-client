import React from 'react';

const Media = ({code, description}) => {
  return (
    <label>
      {description}:
      <input type="file" name={code} />
    </label>
  );
};

export default Media;
