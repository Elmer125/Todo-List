import React from "react";
import "./App.css";
import { AppUI } from "./AppUI/AppUI";
import { TodoProvider } from "./Context/TodoCountext";

/* const defaultTodos = [
  { text: "cortar cebolla", completed: false },
  { text: "Tomar curso", completed: true },
  { text: "estender la ropa", completed: true },
]; */

function App() {
  return (
    <>
      <TodoProvider>
        <AppUI />
      </TodoProvider>
    </>
  );
}

export default App;
