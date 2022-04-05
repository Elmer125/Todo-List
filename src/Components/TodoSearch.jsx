import React, { useContext } from "react";
import "../Styles/TodoSearch.css";
import { TodoContext } from "../Context/TodoCountext";

export const TodoSearch = () => {
  const { search, setSearch, totalTodos } = useContext(TodoContext);
  const onSearchValueChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <input
        className="TodoSearch"
        placeholder="..."
        value={search}
        onChange={onSearchValueChange}
        disabled={!totalTodos}
      />
    </>
  );
};
