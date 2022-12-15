import React from "react";
import ReactDOM from "react-dom";
import { books } from "./books";
import Book from "./Book";

// CSS
import "./index.css";

// Setup vars

const Booklist = () => {
  return (
    <section className="booklist">
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </section>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
