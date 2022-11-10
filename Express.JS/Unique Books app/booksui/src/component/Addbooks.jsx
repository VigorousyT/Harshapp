import React from "react";
import { useState } from "react";

function Addbooks() {
  const [newbook, setNewbook] = useState({
    title: "",
    author: "",
    Image: "",
  });

  function addBook() {
    console.log(newbook);
    fetch("http://localhost:5000/addBook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newbook),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        alert("congratulations! New Book Added👌👌");
      });
  }

  return (
    <div>
      <div class="container">
        <h2>Add Book form</h2>
        <hr />
        <div class="form-group">
          <label for="text">Book Name:</label>
          <input
            type="text"
            onChange={(e) => {
              setNewbook({ ...newbook, title: e.target.value });
            }}
            class="form-control"
            id="text"
            placeholder="Enter Book name..."
            name="text"
          />
        </div>
        <br />
        <div class="form-group">
          <label for="text">Author:</label>
          <input
            type="text"
            onChange={(e) => {
              setNewbook({ ...newbook, author: e.target.value });
            }}
            class="form-control"
            id="text"
            placeholder="Enter Author Name..."
            name="text"
          />
          <br />
          <label class="custom-file-label" for="customFile">
            Image:
          </label>
          <br />
          <input
            type="link"
            class="form-control"
            id="text"
            onChange={(e) => {
              setNewbook({ ...newbook, Image: e.target.value });
            }}
          />
        </div>
        <br />
        <button onClick={addBook} type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Addbooks;
