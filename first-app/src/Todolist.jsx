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

  //-------------Creating A Delete function------------//
  function del(i) {
    var temp = [...todos]
    temp.splice(i, 1)
    setTodos([...temp])
  }
  //-------------Created A Delete function-----and using it inside the todos.map <button onClick={() => { del(i) }}>-------//
  // Here inside the todos.map <button> we use a anonymous function. using it directely is not a good approach. like this <button onClick={del(i)}>

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
        return <li>{t}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={() => { del(i) }}>Delete</button>
        </li>;
      })}
    </div>
  );
}

export default Todolist;
