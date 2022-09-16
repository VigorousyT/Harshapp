import React from "react";
import { UC } from "./hooks";

function Counter() {
  var [count, inc, dec] = UC();


  return (
    <div className="tod">
      <h2>Count : {count}</h2>
      <button onClick={inc}>INC</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={dec}>DEC</button>
    </div>
  );
}

export default Counter;
