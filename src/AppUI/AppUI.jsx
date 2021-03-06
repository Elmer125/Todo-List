import { TodoCounter } from "../Components/TodoCounter";
import { useContext } from "react";
import { TodoItem } from "../Components/TodoItem";
import { CreateTodoButton } from "../Components/CreateTodoButton";
import { TodoList } from "../Components/TodoList";
import { TodoSearch } from "../Components/TodoSearch";
import { TodoContext } from "../Context/TodoCountext";
import { Modal } from "../Modal/Modal";
import { TodoForm } from "../Components/TodoForm";
import { Loader } from "../Components/Loader";
import { EmptyTodo } from "../Components/EmptyTodo";
import { TodoError } from "../Components/TodoError";
import { ChangeAlert } from "../Components/ChangeAlert/ChangeAlert";
import { EmptySearch } from "../Components/EmptySearch";
import { ToastContainer } from "react-toastify";
import { toastInfo, toastSuccess } from "../Utilities/Alerts";
export const AppUI = () => {
  const {
    loading,
    error,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal,
    totalTodos,
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <TodoError />}
        {loading && <Loader />}
        {!loading && !totalTodos && <EmptyTodo />}
        {!!totalTodos && !searchedTodos.length && <EmptySearch />}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {
              completeTodos(todo.text);
              toastSuccess("Tarea completada ");
            }}
            onDelete={() => {
              deleteTodos(todo.text);
              toastInfo("Tarea eliminada");
            }}
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <ToastContainer />
      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />.
      <ChangeAlert />
    </>
  );
};
