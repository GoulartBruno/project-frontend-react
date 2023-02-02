import React from "react";
import { useState, useEffect } from "react";

const url = "http://localhost:3001/books";

function Books() {
  const [books, setBooks] = useState([]);
  const fitData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setBooks(data);
  };
  useEffect(() => {
    fitData();
  }, []);
  return (
    <div>
      {books.map((element, index) => (
        <div key={index}>
          <p>{element.name}</p>
          <p>{element.price}</p>
          <p>{element.price}</p>0<img src={element.image}></img>
        </div>
      ))}
    </div>
  );
}

export default Books;
