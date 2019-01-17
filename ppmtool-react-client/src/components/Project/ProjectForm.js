import React, { Component } from "react";

export default class ProjectForm extends Component {
  render() {
    return (
      <div>
        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">{props.title}</h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": props.errors.projectName
                      })}
                      placeholder="Project Name"
                      name="projectName"
                      value={this.state.projectName}
                      onChange={this.onChange}
                    />
                    {this.props.errors.projectName && (
                      <div className="invalid-feedback">
                        {this.props.errors.projectName}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": this.props.errors.projectIdentifier
                      })}
                      placeholder="Unique Project ID"
                      name="projectIdentifier"
                      onChange={this.onChange}
                      state={this.state.projectIdentifier}
                    />
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
