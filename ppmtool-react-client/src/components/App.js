import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import Dashboard from "./Dashboard";
import Header from "./Layout/Header";
import AddProject from "./Project/AddProject";
import UpdateProject from "./Project/UpdateProject";
import store from "../store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addProject" component={AddProject} />
            <Route exact path="/updateProject/:id" component={UpdateProject} />
          </div>
        </Router>
      </Provider>
    );
  }
}
