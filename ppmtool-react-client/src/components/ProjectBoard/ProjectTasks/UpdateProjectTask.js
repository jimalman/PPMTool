import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateProjectTask, getProjectTask } from "../../../actions/index";
import PropTypes from "prop-types";

import ProjectTaskForm from "./ProjectTaskForm";

class UpdateProjectTask extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props.match.params;

    this.state = {
      id: "",
      projectSequence: "",
      summary: "",
      acceptanceCriteria: "",
      status: "",
      priority: "",
      dueDate: null,
      projectIdentifier: "",
      createAt: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const updatedProjectTask = {
      id: this.state.id,
      projectSequence: this.state.projectSequence,
      summary: this.state.summary,
      acceptanceCriteria: this.state.acceptanceCriteria,
      status: this.state.status,
      priority: this.state.priority,
      dueDate: this.state.dueDate,
      projectIdentifier: this.state.projectIdentifier,
      createAt: this.state.createAt
    };
    this.props.updateProjectTask(
      this.state.projectIdentifier,
      this.state.projectSequence,
      updatedProjectTask,
      this.props.history
    );
  };

  componentDidMount() {
    const { backlogId, ptId } = this.props.match.params;
    this.props.getProjectTask(backlogId, ptId, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    const {
      id,
      projectSequence,
      summary,
      acceptanceCriteria,
      status,
      priority,
      dueDate,
      projectIdentifier,
      createAt
    } = nextProps.projectTask;

    this.setState({
      id,
      projectSequence,
      summary,
      acceptanceCriteria,
      status,
      priority,
      dueDate,
      projectIdentifier,
      createAt
    });
  }

  render() {
    const { backlogId, ptId } = this.props.match.params;
    return (
      <div>
        <div className="add-PBI">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <Link
                  to={`/projectBoard/${backlogId}`}
                  className="btn btn-light"
                >
                  Back to Project Board
                </Link>
                <h4 className="display-4 text-center">Update Project Task</h4>
                <p className="lead text-center">
                  Project Name: {this.state.projectIdentifier} Project Task ID:{" "}
                  {this.state.projectSequence}
                </p>

                <ProjectTaskForm
                  onChange={this.onChange}
                  onSubmit={this.onSubmit}
                  errors={this.props.errors}
                  summary={this.state.summary}
                  acceptanceCriteria={this.state.acceptanceCriteria}
                  status={this.state.status}
                  priority={this.state.priority}
                  dueDate={this.state.dueDate}
                  projectIdentifier={this.state.projectIdentifier}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdateProjectTask.propTypes = {
  getProjectTask: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  updateProjectTask: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  projectTask: state.backlog.projectTask,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getProjectTask, updateProjectTask }
)(UpdateProjectTask);
