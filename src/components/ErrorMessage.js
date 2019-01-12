import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = props => {
  return (
    <ul className="list-group">
      <li className="list-group-item list-group-item-danger">
        {props.errorMessage}
      </li>
    </ul>
  );
};

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string.isRequired
};

export default ErrorMessage;
