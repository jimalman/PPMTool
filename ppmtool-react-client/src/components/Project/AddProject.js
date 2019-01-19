import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ProjectForm from "./ProjectForm";
import { createProject } from "../../actions";

class AddProject extends Component {
  constructor() {
    super();

    this.state = {
      projectName: "",
      projectIdentifier: "",
      description: "",
      startDate: "",
      endDate: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newProject = {
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    };
    this.props.createProject(newProject, this.props.history);
  };

  render() {
    return (
      <div>
        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Create Project form</h5>
                <hr />
                <ProjectForm
                  onChange={this.onChange}
                  onSubmit={this.onSubmit}
                  errors={this.props.errors}
                  projectName={this.state.projectName}
                  projectIdentifier={this.state.projectIdentifier}
                  description={this.state.description}
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    errors: state.errors
  };
};

export default connect(
  mapStateToProps,
  { createProject }
)(AddProject);
