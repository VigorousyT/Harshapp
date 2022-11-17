import React from "react";
import PropTypes from "prop-types";

const Rating = ({ stars }) => (
  <div>
    {[...Array(Math.round(stars <= 5 ? stars : 0)).keys()].map((v) => (
      <div className="star" key={v} />
    ))}
  </div>
);

Rating.propTypes = {
  stars: PropTypes.number.isRequired,
};

export default Rating;
