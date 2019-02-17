import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setJWTToken from "../securityUtils/setJWTToken";

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
import { SET_CURRENT_USER } from "../actions/types";
import { logout } from "../actions/securityActions";
import SecuredRoute from "../securityUtils/SecureRoute";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decodedJWTToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decodedJWTToken
  });

  const currentTime = Date.now() / 1000;
  if (decodedJWTToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

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
            <Switch>
              <SecuredRoute exact path="/dashboard" component={Dashboard} />
              <SecuredRoute exact path="/addProject" component={AddProject} />
              <SecuredRoute
                exact
                path="/updateProject/:id"
                component={UpdateProject}
              />
              <SecuredRoute
                exact
                path="/projectBoard/:id"
                component={ProjectBoard}
              />
              <SecuredRoute
                exact
                path="/addProjectTask/:id"
                component={AddProjectTask}
              />
              <SecuredRoute
                exact
                path="/updateProjectTask/:backlogId/:ptId"
                component={UpdateProjectTask}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
