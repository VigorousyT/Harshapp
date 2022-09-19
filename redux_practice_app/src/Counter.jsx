import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  function inc() {
    props.dispatch({ type: "INCREMENT" });
  }
  function dec() {
    props.dispatch({ type: "DECREMENT" });
  }
  function reset() {
    props.dispatch({ type: "RESET" });
  }
  return (
    <div>
      <h2 className="tod">COUNTER :- {props.count}</h2>
      <button className="tod" onClick={inc}>
        INCREASE
      </button>
      <button className="tod" onClick={dec}>
        DECREASE
      </button>
      <button className="tod" onClick={reset}>
        RESET
      </button>
    </div>
  );
}

export default connect((store) => {
  return store;
})(Counter);
