import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

// Setup vars
const firstBook = {
  img: "https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/91bYsX41DVL._AC_UL900_SR900,600_.jpg",
  author: "James Clear",
  title: "Atomic Habits: The life-changing",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/818bGgNn0EL._AC_UY436_FMwebp_QL65_.jpg",
  author: "Amish Tripathi",
  title: "The Immortals of Meluha",
};

const Booklist = () => {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        author={firstBook.author}
        title={firstBook.title}
      />
      <Book
        img={secondBook.img}
        author={secondBook.author}
        title={secondBook.title}
      />
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
