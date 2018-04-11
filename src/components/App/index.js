import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import ServiceListQuery from '../ServiceListQuery';

import './index.css';

const client = new ApolloClient({
  uri: "http://open311ql.pw/graphql"
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div className="container">
          <ServiceListQuery />
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
