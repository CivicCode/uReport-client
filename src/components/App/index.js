import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import EntryPage from '../EntryPage';
import Form from '../FormContainer'

class App extends Component {
  render() {
    return(
      <div className="App">
        <Route 
          path="/" 
          component={EntryPage} />
        <Route 
          path="/form/*" 
          component={Form}/>
      </div>
    )
  }
}

export default App;