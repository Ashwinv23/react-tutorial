import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY436_QL65_.jpg"
    alt=""
  />
);

const Title = () => {
  return <h1>Love you to the moon and back</h1>;
};

const Author = () => <h4>Tim Warness</h4>;

ReactDOM.render(<BookList />, document.getElementById("root"));
