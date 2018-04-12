import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const client = new ApolloClient({
  uri: "http://open311ql.pw/graphql"
});

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <Route component={App} />
    </ApolloProvider>
  </Router>
, 
  document.getElementById('root'));
registerServiceWorker();
