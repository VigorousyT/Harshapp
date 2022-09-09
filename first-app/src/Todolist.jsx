import React from "react";

function Todolist() {
  var [todos, setTodos] = React.useState([
    "Wake up!",
    "Do exercise.",
    "Take bath",
    "Have Breakfast",
    "And the day started...",
  ]);
  var [newTask, setnewtask] = React.useState("");
  var myref = React.useRef();
  function addTask() {
    setTodos([...todos, newTask]);
  }
  React.useEffect(() => {
    myref.current.focus();
  }, []);

  function checkEnter(e) {
    console.log(e.key);
  }

  return (
    <div className="tod">
      <h1 className="tod">TODOLIST</h1>
      <input
        className="tod"
        type="text"
        onChange={(e) => {
          setnewtask(e.target.value);
        }}
        ref={myref}
        onKeyUp={checkEnter}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="tod" onClick={addTask}>
        Add Task
      </button>
      {todos.map((t, i) => {
        return <li>{t}</li>;
      })}
    </div>
  );
}

export default Todolist;
