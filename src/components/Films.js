import React from "react";
import Film from "./Film";
import PropTypes from "prop-types";

const Films = props => {
  const { films } = props;
  return (
    <div className="list-group">
      {films.map((film, index) => {
        return <Film key={index} film={film} />;
      })}
    </div>
  );
};

Films.propTypes = {
  films: PropTypes.array.isRequired
};

export default Films;
