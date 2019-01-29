import React from "react";

const Date = props => {
  return (
    <div>
      <h6>{props.title}</h6>
      <div className="form-group">
        <input
          type="date"
          className="form-control form-control-lg"
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default Date;
