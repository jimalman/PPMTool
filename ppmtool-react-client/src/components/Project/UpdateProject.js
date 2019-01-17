import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { getProject } from "../../actions";

class UpdateProject extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProject(id, this.props.history);
  }

  render() {
    return (
      <div>
        <h1>Update Project</h1>
      </div>
    );
  }
}

UpdateProject.propTypes = {
  getProject: PropTypes.func.isRequired
};

export default connect(
  null,
  { getProject }
)(UpdateProject);
