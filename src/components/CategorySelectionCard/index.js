import React from 'react';

import './index.css';

const CategorySelectionCard = ({ category, list }) => {

  return (
    <div className="CategorySelectionCard">
      <h3>{category}</h3>
      <ul>
      {list.map(item => (
        <li key={item.service_name}>
          <a href="#">{item.service_name}</a>
        </li>
      ))}
      </ul>
    </div>
  );
};

export default CategorySelectionCard;
