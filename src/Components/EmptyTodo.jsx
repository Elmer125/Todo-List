import React from "react";
import { BsJournalPlus } from "react-icons/bs";
import "../Styles/EmptyTodo.css";

export const EmptyTodo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "40px",
      }}
    >
      <p>
        ¡Crea una tarea! 
      </p>
      <BsJournalPlus className="Icon-create" />
    </div>
  );
};
