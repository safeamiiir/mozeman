import React, { Component } from "react";
import { My404Component } from "./_components/index";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./_styles/App.css";
import MainPage from "./_pages/main";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={MainPage} />
          <Route path="*" exact={true} component={My404Component} />
        </Switch>
      </Router>
    );
  }
}

export default App;
