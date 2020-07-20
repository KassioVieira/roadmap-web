import React, { useState, createContext } from "react";

export const FirebaseContext = createContext();

const FirabaseProvider = ({ children }) => {
  const [roadamap, setRoadmap] = useState([]);
  const [steps, setSteps] = useState([]);

  const readRoadmap = () => {};
  const listStepsByRoadmap = (id) => {};
  const editStep = () => {};
  const deletStep = () => {};
  const saveRoadmap = () => {};
  const editRoadmap = (id) => {};
  const deleteRoadmap = (id) => {};

  return (
    <FirebaseContext.Provider
      value={{
        roadamap,
        steps,
        readRoadmap,
        listStepsByRoadmap,
        editStep,
        deletStep,
        saveRoadmap,
        editRoadmap,
        deleteRoadmap,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
