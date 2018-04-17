import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import EntryPage from '../EntryPage';
import Form from '../FormContainer';

import './index.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Switch>
          <Route
            exact path="/"
            component={EntryPage} />
          <Route
            path="/form/*"
            component={Form}/>
        </Switch>
      </div>
    )
  }
}

export default App;
