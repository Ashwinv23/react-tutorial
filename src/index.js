import React from "react";
import ReactDOM from "react-dom";

const Person = () => <h2>Ashwin Vijendra</h2>;

const Message = () => {
  return <p>This is a component</p>;
};

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
