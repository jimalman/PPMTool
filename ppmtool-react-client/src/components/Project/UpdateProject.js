import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getProject, createProject } from "../../actions";
import ProjectForm from "./ProjectForm";

class UpdateProject extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      projectName: "",
      projectIdentifier: "",
      description: "",
      startDate: "",
      endDate: ""
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProject(id, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    const {
      id,
      projectName,
      projectIdentifier,
      description,
      startDate,
      endDate
    } = nextProps.project;

    this.setState({
      id,
      projectName,
      projectIdentifier,
      description,
      startDate,
      endDate
    });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newProject = {
      id: this.state.id,
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
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Update Project form</h5>
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
    );
  }
}

UpdateProject.propTypes = {
  getProject: PropTypes.func.isRequired,
  createProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    errors: state.errors,
    project: state.project.project
  };
};

export default connect(
  mapStateToProps,
  { getProject, createProject }
)(UpdateProject);
