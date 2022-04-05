import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoCountext";

export const EmptySearch = () => {
  const { search } = useContext(TodoContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "40px",
      }}
    >
      <p style={{ fontSize: "40px" }}>No hay resultado para : {search} </p>
    </div>
  );
};
