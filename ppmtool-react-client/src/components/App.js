import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Dashboard from "./Dashboard";
import Header from "./Layout/Header";
import AddProject from "./Project/AddProject";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="" component={Dashboard} />
          <Route exact path="/addproject" component={AddProject} />
        </div>
      </Router>
    );
  }
}
