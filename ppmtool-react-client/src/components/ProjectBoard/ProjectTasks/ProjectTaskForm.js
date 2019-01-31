import React, { Component } from "react";

import classnames from "classnames";
import Date from "../../Project/Date";

class ProjectTaskForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className={classnames("form-control form-control-lg", {
                "is-invalid": this.props.errors.summary
              })}
              name="summary"
              placeholder="Project Task summary"
              value={this.props.summary}
              onChange={this.props.onChange}
            />
            {this.props.errors.summary && (
              <div className="invalid-feedback">
                {this.props.errors.summary}
              </div>
            )}
          </div>
          <div className="form-group">
            <textarea
              className="form-control form-control-lg"
              placeholder="Acceptance Criteria"
              name="acceptanceCriteria"
              value={this.props.acceptanceCriteria}
              onChange={this.props.onChange}
            />
          </div>
          <Date
            title="Due Date"
            name="dueDate"
            value={this.props.dueDate || ""}
            onChange={this.props.onChange}
          />
          <div className="form-group">
            <select
              className="form-control form-control-lg"
              name="priority"
              value={this.props.priority}
              onChange={this.props.onChange}
            >
              <option value={0}>Select Priority</option>
              <option value={1}>High</option>
              <option value={2}>Medium</option>
              <option value={3}>Low</option>
            </select>
          </div>

          <div className="form-group">
            <select
              className="form-control form-control-lg"
              name="status"
              value={this.props.status}
              onChange={this.props.onChange}
            >
              <option value="">Select Status</option>
              <option value="TO_DO">TO DO</option>
              <option value="IN_PROGRESS">IN PROGRESS</option>
              <option value="DONE">DONE</option>
            </select>
          </div>

          <input type="submit" className="btn btn-primary btn-block mt-4" />
        </form>
      </div>
    );
  }
}

export default ProjectTaskForm;
