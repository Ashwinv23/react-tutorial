import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const title = "Love you to the moon and back";
const author = "Tim Warness";
const img =
  "https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY436_QL65_.jpg";

const Book = () => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
