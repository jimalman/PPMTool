import React, { Component } from "react";

import classnames from "classnames";
import Date from "./Date";

export default class ProjectForm extends Component {
  renderInput(type, placeHolder, name) {
    return (
      <input
        type={type}
        className={classnames("form-control form-control-lg", {
          "is-invalid": this.props.errors[name]
        })}
        placeholder={placeHolder}
        name={name}
        value={this.props[name]}
        onChange={this.props.onChange}
      />
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            {this.renderInput("text", "Project Name", "projectName")}
            {this.props.errors.projectName && (
              <div className="invalid-feedback">
                {this.props.errors.projectName}
              </div>
            )}
          </div>
          <div className="form-group">
            {this.renderInput("text", "Unique Project ID", "projectIdentifier")}
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
              value={this.props.description}
              onChange={this.props.onChange}
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
            value={this.props.startDate || ""}
            onChange={this.props.onChange}
          />
          <Date
            title="Estimated End Date"
            name="endDate"
            value={this.props.endDate || ""}
            onChange={this.props.onChange}
          />
          <input type="submit" className="btn btn-primary btn-block mt-4" />
        </form>
      </div>
    );
  }
}
