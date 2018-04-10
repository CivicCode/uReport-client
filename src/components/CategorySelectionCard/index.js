import React from 'react';

import './index.css';

const CategorySelectionCard = ({ category }) => {

  return (
    <div className="CategorySelectionCard">
      <h3>{category}</h3>
    </div>
  );

};

export default CategorySelectionCard;
