import { createContext, useContext, useState } from "react";

const StorageContext = createContext();

export function useStorage() {
  return useContext(StorageContext);
}

export function StorageProvider({ children }) {
  const [storage, setStorage] = useState(new Set());

  const addDataToStorage = (data) => {
    setStorage(new Set([...storage, data]));
  };

  const deleteDataFromStorage = (data) => {
    const updatedStorage = new Set([...storage]);
    updatedStorage.delete(data);
    setStorage(updatedStorage);
  };

  return (
    <StorageContext.Provider
      value={{
        storage,
        addDataToStorage,
        deleteDataFromStorage,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
}
