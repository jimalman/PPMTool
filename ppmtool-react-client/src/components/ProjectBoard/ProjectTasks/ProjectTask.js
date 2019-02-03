import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import { deleteProjectTask } from "../../../actions/index";

class ProjectTask extends Component {
  onDeleteProjectTaskClick = (backlogId, ptId) => {
    this.props.deleteProjectTask(backlogId, ptId);
  };

  render() {
    const { projectTask } = this.props;
    let priorityString;
    let priorityClass;

    if (projectTask.priority === 1) {
      priorityClass = "bg-danger text-light";
      priorityString = "HIGH";
    } else if (projectTask.priority === 2) {
      priorityClass = "bg-warning text-light";
      priorityString = "MEDIUM";
    } else {
      priorityClass = "bg-info text-light";
      priorityString = "LOW";
    }
    return (
      <div className="card mb-1 bg-light">
        <div className={`card-header text-primary ${priorityClass}`}>
          ID: {projectTask.projectSequence} -- Priority: {priorityString}
        </div>
        <div className="card-body bg-light">
          <h5 className="card-title">{projectTask.summary}</h5>
          <p className="card-text text-truncate ">
            {projectTask.acceptanceCriteria}
          </p>
          <Link
            to={`/updateProjectTask/${projectTask.projectIdentifier}/${
              projectTask.projectSequence
            }`}
            className="btn btn-primary"
          >
            View / Update
          </Link>

          <button
            className="btn btn-danger ml-4"
            onClick={() =>
              this.onDeleteProjectTaskClick(
                `${projectTask.projectIdentifier}`,
                `${projectTask.projectSequence}`
              )
            }
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

ProjectTask.propTypes = {
  deleteProjectTask: Proptypes.func.isRequired
};

export default connect(
  null,
  { deleteProjectTask }
)(ProjectTask);
