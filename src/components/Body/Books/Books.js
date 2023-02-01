import React, {useState, useEffect} from "react";
import { useState } from "react";
import Book from "./Book/Book.Js";
import Books from "../../../../public/api/books.json";

async function getBooks() {
  let response = await fetch("http://localhost:3000/api/books.json");
  let data = await response.json();
  return data;
}

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    getBooks().then((data) => {
      this.setState((state) => ({
        books: data["books"],
      }));
    });
  }

  render() {
    return (
      <div>
        <h3>Books List</h3>

        {this.state.planets.map((book, index) => (
        ))}
      </div>
    );
  }
}

export default Books;


Books && Books.map(book => {
  return(

<div key={ book.id}></div>

  )
})