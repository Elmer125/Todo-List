import React, { useState } from "react";
import { useLocalStorage } from "../hook/useLocalStorage";

const TodoContext = React.createContext();

const TodoProvider = (props) => {
  //Utilizando el Hook
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  //Estados
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);

  //Filtrar por los que estan completados
  const numerocompletedTodos = todos.filter((todo) => !!todo.completed).length;
  //Total de todos en la lista
  const totalTodos = todos.length;

  //Funcion para buscar en el array
  let searchedTodos = [];
  if (!search.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = search.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  //Para completar las tareas
  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
    /*  todos[todoIndex] = {
      text: todos[todoIndex].text,
      completed: true,
    }; */
  };

  const AddTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  //Eliminar Tareas
  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
    /*  todos[todoIndex] = {
      text: todos[todoIndex].text,
      completed: true,
    }; */
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        numerocompletedTodos,
        search,
        setSearch,
        searchedTodos,
        completeTodos,
        AddTodo,
        deleteTodos,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
