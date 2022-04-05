import { useState, useContext, useEffect } from "react";
import { TodoContext } from "../../Context/TodoCountext";

export function useStorageListener() {
  const { sincronize } = useContext(TodoContext);
  const [storageChange, setStorageChange] = useState(false);
  useEffect(() => {
    window.addEventListener("storage", (change) => {
      if (change.key === "TODOS_V1") {
        setStorageChange(true);
      }
    });
  }, []);

  const toggleShow = () => {
    sincronize();
    setStorageChange(false);
  };

  return { show: storageChange, toggleShow };
}
