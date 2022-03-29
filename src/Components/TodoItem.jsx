import React from "react";
import "../Styles/TodoItem.css";
import { BsCheckLg } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";

export const TodoItem = ({ text, completed, onComplete, onDelete }) => {
  return (
    <>
      <li className="TodoItem">
        <span
          onClick={onComplete}
          className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        >
          <BsCheckLg />
        </span>
        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
          {text}
        </p>
        <span onClick={onDelete} className="Icon Icon-delete">
          <BsXLg />
        </span>
      </li>
    </>
  );
};
