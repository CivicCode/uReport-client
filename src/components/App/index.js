import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import ServiceListQuery from '../ServiceListQuery';
import ServiceSelection from '../ServiceSelection';

import './index.css';

import { testData } from '../../test-data';

const client = new ApolloClient({
  uri: "http://open311ql.pw/graphql"
});

const App = () => {
  /*
    reduce function below will result in data structure like this:
    {
      'Cleanup & Sanitation': [
        {
          service_code: 2,
          service_name: 'Excessive Growth'
          ...
        }
        ...
      ],
      ...
    }
  */
  const groupedByGroup = testData.data.serviceList.reduce(
    (acc, cv) => {
      acc[cv.group] = acc[cv.group] || [];
      acc[cv.group].push(cv);
      return acc;
    }, {}
  );

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div className="container">
        <ServiceSelection
          groupedData={groupedByGroup}
        />
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
