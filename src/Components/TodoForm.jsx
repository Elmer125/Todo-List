import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoCountext";
import { toastError, toastSuccess } from "../Utilities/Alerts";
import "../Styles/TodoForm.css";

export const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState("");
  const { AddTodo, setOpenModal } = useContext(TodoContext);

  const onCancel = (e) => {
    e.preventDefault();
    setOpenModal(false);
  };
  const onAdd = (e) => {
    if (!newTodoValue) {
      e.preventDefault();
      toastError("Escriba una tarea");
    } else {
      e.preventDefault();
      AddTodo(newTodoValue);
      setOpenModal(false);
      toastSuccess("Tarea agregada con exito");
    }
  };
  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };
  return (
    <form onSubmit={onAdd}>
      <label>Escribe la nueva tarea</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Nueva Tarea"
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>

        <button className="TodoForm-button TodoForm-button-add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
};
