import React from "react";
import { BsXLg } from "react-icons/bs";
import "../Styles/TodoError.css";

export const TodoError = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "40px",
      }}
    >
      <p>Desespérate, hubo un error...</p>
      <BsXLg className="Icon-error" />
    </div>
  );
};
