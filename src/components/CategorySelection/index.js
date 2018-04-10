import React from 'react';
import ApolloClient from 'apollo-boost';

import CategorySelectionCard from '../CategorySelectionCard';

import './index.css';

const CategorySelection = () => {
  return (
    <div className="CategorySelection">
      <CategorySelectionCard
      />
    </div>
  );
};

export default CategorySelection;
