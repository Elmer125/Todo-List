import React, { useContext } from "react";
import "../Styles/TodoCounter.css";
import { TodoContext } from "../Context/TodoCountext";

export const TodoCounter = () => {
  const { numerocompletedTodos, totalTodos } = useContext(TodoContext);
  return (
    <>
      <h2 className={!totalTodos ? "TodoCounter-opacity" : "TodoCounter"}>
        Has complentado {numerocompletedTodos} de {totalTodos} Tareas
      </h2>
    </>
  );
};
