import React from 'react';

const Media = ({code, description}) => {
  return (
    <div className="Media">
      <label>
        {description}:
      </label>
      <input type="file" name={code} />
    </div>
  );
};

export default Media;
