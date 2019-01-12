import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";

const Film = props => {
  const { film } = props;

  return (
    <div className="list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{film.title}</h5>
        <Moment format="dddd, MMMM DD YYYY">{film.release_date}</Moment>
      </div>
      <p className="mb-1">
        <small>Episode {film.episode_id}</small>
      </p>
    </div>
  );
};

Film.propTypes = {
  film: PropTypes.object.isRequired
};

export default Film;
