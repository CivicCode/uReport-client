import React from 'react';

const Media = ({ field }) => {
  const { code, description } = field;
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
