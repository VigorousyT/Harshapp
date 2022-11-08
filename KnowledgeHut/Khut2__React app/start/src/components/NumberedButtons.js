import React from "react";
import PropTypes from "prop-types";

const NumberedButtons = ({num}) => {
  let n = 0;
  let elem = [];
  while (n < num) {
    elem.push(n);
    n++;
  }
  return (
    <div className="button-set">
      {elem.map((e, i) => (
        <button key={i}>{e}</button>
      ))}
    </div>
  );
};

NumberedButtons.propTypes = {
  num: PropTypes.number
};

export default NumberedButtons;
