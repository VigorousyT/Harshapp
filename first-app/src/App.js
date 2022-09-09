import React from "react";
import './App.css';
import CM from "./comp";
import Counter from './Counter';
import Rfooter from "./Rfooter";
import Rlogo from './Rlogo';
import Todolist from './Todolist';



function App() {
  return (
    <div>
      <div><Rlogo></Rlogo></div>
      <div><Rfooter></Rfooter></div>

      <div className="tod">

        <h1>The App is Started Working</h1>
        <Todolist></Todolist>
        <Counter></Counter>
        <CM></CM>
      </div>
    </div>
  );
}

export default App;
