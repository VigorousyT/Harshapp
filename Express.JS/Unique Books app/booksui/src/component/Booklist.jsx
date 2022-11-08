import React, { useState, useEffect } from "react";

export function Booklist() {
  const [books, setBooksList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000");
  }, []);
  return (
    <div>
      <h1>PLEASE WAIT...</h1>
    </div>
  );
}
