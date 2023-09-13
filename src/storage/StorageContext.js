import { createContext, useContext, useState } from "react";

const StorageContext = createContext();

export function useStorage() {
  return useContext(StorageContext);
}

export function StorageProvider({ children }) {
  const [storage, setStorage] = useState({});

  const addDataToStorage = (phone, data) => {
    setStorage({ ...storage, [phone]: data });
  };

  const getDataFromStorage = (phone) => {
    return storage[phone];
  };

  const deleteDataFromStorage = (phone) => {
    const updatedStorage = { ...storage };
    delete updatedStorage[phone];
    setStorage(updatedStorage);
  };

  return (
    <StorageContext.Provider
      value={{
        storage,
        addDataToStorage,
        getDataFromStorage,
        deleteDataFromStorage,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
}
