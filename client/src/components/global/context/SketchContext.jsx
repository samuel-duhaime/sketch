import { createContext, useReducer, useState } from "react";

export const SketchContext = createContext();

// Initial context sketch
const initialSketch = {};

// Reducer for all the actions type of sketch
const sketchReducer = (sketch, action) => {
  const { type } = action; // All the action object

  switch (type) {
    case "nameOfAction": {
      return {
        ...sketch,
        // State change
      };
    }
    default: {
      throw new Error(`Invalid type: ${type}`);
    }
  }
};

// Context user provider
export const SketchProvider = ({ children }) => {
  const [sketch, dispatch] = useReducer(sketchReducer, initialSketch);
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedPage, setSelectedPage] = useState(null);

  // updateSketch
  // updatePage
  // updateElement
  // Save

  // Reducer action
  const nameOfAction = () => {
    dispatch({ type: "nameOfAction" });
  };

  return (
    <SketchContext.Provider
      value={{
        sketch,
        selectedElement,
        setSelectedElement,
        selectedPage,
        setSelectedPage,
        actions: {
          nameOfAction,
        },
      }}
    >
      {children}
    </SketchContext.Provider>
  );
};
