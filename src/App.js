import React, { Component } from 'react';
import {Home, My404Component} from './_components/index';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import './_styles/App.css';

class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route path="/home" exact={true} component={Home}/>
          <Route path="/" exact={true} component={Home}/>
          <Route path='*' exact={true} component={My404Component} />
        </Switch>
      </Router>
    )
  }
}

export default App;
