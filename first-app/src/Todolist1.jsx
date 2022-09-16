import React from "react";

function Todolist1() {
  var [todos, setTodos] = React.useState([
    {
      name: "JSON",
      status: true,
    },
    {
      name: "MongoDb",
      status: false,
    },
    {
      name: "React",
      status: true,
    },
    {
      name: "Node.js",
      status: true,
    },
    {
      name: "DSA",
      status: false,
    },
  ]);
  return (
    <div className="tod">
      <h1>STYLED TODOLIST</h1>
      <ul>
        {todos.map((h, i) => {
          return <li className={h.status ? "red" : "blue"}>{h.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todolist1;
