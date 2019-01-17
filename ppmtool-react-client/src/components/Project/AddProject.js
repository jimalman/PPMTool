import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

import { createProject } from "../../actions";
import Date from "./Date";

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

  renderInput(type, placeHolder, name) {
    return (
      <input
        type={type}
        className={classnames("form-control form-control-lg", {
          "is-invalid": this.props.errors[name]
        })}
        placeholder={placeHolder}
        name={name}
        value={this.state[name]}
        onChange={this.onChange}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Create Project form</h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    {this.renderInput("text", "Project Name", "projectName")}
                    {this.props.errors.projectName && (
                      <div className="invalid-feedback">
                        {this.props.errors.projectName}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    {this.renderInput(
                      "text",
                      "Unique Project ID",
                      "projectIdentifier"
                    )}
                    {this.props.errors.projectIdentifier && (
                      <div className="invalid-feedback">
                        {this.props.errors.projectIdentifier}
                      </div>
                    )}
                  </div>
                  {
                    // <!-- disabled for Edit Only!! remove "disabled" for the Create operation -->
                  }
                  <div className="form-group">
                    <textarea
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": this.props.errors.description
                      })}
                      placeholder="Project Description"
                      name="description"
                      value={this.state.description}
                      onChange={this.onChange}
                    />
                    {this.props.errors.description && (
                      <div className="invalid-feedback">
                        {this.props.errors.description}
                      </div>
                    )}
                  </div>
                  <Date
                    title="Start Date"
                    name="startDate"
                    value={this.state.startDate}
                    onChange={this.onChange}
                  />
                  <Date
                    title="Estimated End Date"
                    name="endDate"
                    value={this.state.endDate}
                    onChange={this.onChange}
                  />
                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
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
