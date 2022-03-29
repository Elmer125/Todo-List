import React from "react";
import "../Styles/TodoList.css";

export const TodoList = (props) => {
  return (
    <>
      <section>
        <ul>{props.children}</ul>
      </section>
    </>
  );
};
