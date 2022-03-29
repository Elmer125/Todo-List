import React from "react";
import "../Styles/CreateTodoButton.css";

export const CreateTodoButton = ({ setOpenModal, openModal }) => {
  const onClick = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <button className="CreateTodoButton" onClick={onClick}>
        +
      </button>
    </>
  );
};
