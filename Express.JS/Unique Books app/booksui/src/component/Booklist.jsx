import React, { useState, useEffect } from "react";

export function Booklist() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooklist();
  }, []);

  function deleteBooks(id) {
    fetch("http://localhost:5000/deleteBooks" + id)
      .then((res) => res.json)
      .then((data) => {
        alert("Book deleted");
        getBooklist();
      });
  }

  function getBooklist() {
    fetch("http://localhost:5000/Books")
      .then((res) => res.json())
      .then((data) => {
        console.log(typeof data);
        setBooks([...data]);
      });
  }

  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((books, i) => {
              return (
                <>
                  <tr>
                    <td class="w-25">
                      <img
                        src={books.Image}
                        class="img-fluid img-thumbnail"
                        alt="Books"
                        width="200"
                        height="150"
                      />
                    </td>
                    <td>
                      <h2>{books.title}</h2>
                    </td>
                    <td>
                      <h3>
                        <i>{books.author}</i>
                      </h3>
                    </td>
                    <td>
                      {/* <button
                        class="btn btn-warning"
                        onClick={() => {
                          editBooks(books["_id"]);
                        }}
                      >
                        Edit
                      </button> */}
                      <br />
                      <button
                        class="btn btn-danger"
                        onClick={() => {
                          deleteBooks(books["_id"]);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
/* <div>
        <ul>
          {books &&
            books.map((books, i) => {
              return (
                <>
                  <hr />
                  <li>
                    {books.title}
                    <button
                      onClick={() => {
                        deleteBooks(books["_id"]);
                      }}
                    >
                      Edit
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button
                      onClick={() => {
                        deleteBooks(books["_id"]);
                      }}
                    >
                      Delete
                    </button>
                  </li>
                  <hr />
                </>
              );
            })}
        </ul>
      </div> */
