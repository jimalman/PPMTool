import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import Dashboard from "./Dashboard";
import Header from "./Layout/Header";
import AddProject from "./Project/AddProject";
import UpdateProject from "./Project/UpdateProject";
import ProjectBoard from "./ProjectBoard/ProjectBoard";
import AddProjectTask from "./ProjectBoard/ProjectTasks/AddProjectTask";
import UpdateProjectTask from "./ProjectBoard/ProjectTasks/UpdateProjectTask";
import store from "../store";
import Landing from "./Layout/Landing";
import Register from "./UserManagement/Register";
import Login from "./UserManagement/Login";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            {
              // Public Routes
            }
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            {
              // Private Routes
            }
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addProject" component={AddProject} />
            <Route exact path="/updateProject/:id" component={UpdateProject} />
            <Route exact path="/projectBoard/:id" component={ProjectBoard} />
            <Route
              exact
              path="/addProjectTask/:id"
              component={AddProjectTask}
            />
            <Route
              exact
              path="/updateProjectTask/:backlogId/:ptId"
              component={UpdateProjectTask}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}
