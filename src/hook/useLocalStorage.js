import { useState, useEffect } from "react";

export function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sincronizado, setSincronizado] = useState(true);

  useEffect(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }
      setItem(parsedItem);
      setLoading(false);
      setSincronizado(true);
    } catch (err) {
      setError(true);
    }
  }, [sincronizado]);

  const saveItem = (newItem) => {
    try {
      const stringifyItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifyItem);
      setItem(newItem);
    } catch (err) {
      setError(true);
    }
  };

  const sincronize = () => {
    setLoading(true);
    setSincronizado(false);
  };

  return { item, saveItem, loading, error, sincronize };
}
