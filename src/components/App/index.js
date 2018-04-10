import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import ServiceListQuery from '../ServiceListQuery';

import './index.css';

const client = new ApolloClient({
  uri: "http://open311ql.pw/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <ServiceListQuery />
    </div>
  </ApolloProvider>
);

export default App;
