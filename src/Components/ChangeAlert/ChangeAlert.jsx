import React from "react";
import { useStorageListener } from "./useStorageListener";
export const ChangeAlert = () => {
  const { show, toggleShow } = useStorageListener();
  if (show) {
    return (
      <>
        <p>Hubo cambios en otra ventana</p>
        <button
          onClick={() => {
            toggleShow(false);
          }}
        >
          Ok
        </button>
      </>
    );
  } else {
    return null;
  }
};
