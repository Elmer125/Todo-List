import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
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
      <p style={{ fontSize: "40px" }}>
        Da click en el boton <AiOutlinePlusCircle className="Icon-create " />{" "}
        para agregar una nueva tarea
      </p>
    </div>
  );
};
