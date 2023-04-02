import { createContext, useReducer, useState } from "react";
import { fetchApi } from "../../../helpers/fetch/fetchApi";

export const SketchContext = createContext(); // Create the context

// Initial context sketch
const initialSketch = {};

// Reducer for all the actions type of sketch
const sketchReducer = (sketch, action) => {
  const { type, fetchSketchData, newData, selectedElementId, selectedPage } = action; // All the action object


  switch (type) {
    case "fetchSketchAction": {
      return fetchSketchData;
    }
    case "updateSketchAction": {
      return { ...sketch, ...newData, isModified: true, };
    }
    case "patchElementAction": {
      // Get the newElements
      const newElements = sketch[selectedPage].elements.map(element => {
        if (element._id === selectedElementId) {
          return { ...element, ...newData, isModified: true }
        } else {
          return element
        }
      })
      const newPage = { ...sketch[selectedPage], elements: newElements } // Get the newPage
      const newSketch = { ...sketch, [selectedPage]: newPage } // Get the newSketch

      console.log(newSketch)

      return { ...newSketch };
    }
    default: {
      throw new Error(`Invalid type: ${type}`);
    }
  }
};

// Context user provider
export const SketchProvider = ({ children }) => {
  const [sketch, dispatch] = useReducer(sketchReducer, initialSketch);
  const [isFetch, setIsFetch] = useState(false); // Only fetch one time
  const [selectedSection, setSelectedSection] = useState("text");
  const [selectedElementId, setSelectedElementId] = useState(null);
  const [selectedPage, setSelectedPage] = useState("page1");

  // Filter the selectedElement
  const selectedElement = sketch[selectedPage]?.elements?.filter(element => element._id === selectedElementId)[0]

  // Fetch sketch action
  const fetchSketchAction = async ({ sketchId }) => {
    if (!isFetch) {
      // Only fetch one time
      try {
        const fetchResult = await fetch("/sketch/" + sketchId, {
          method: "GET",
        });
        const { data, status, message } = await fetchResult.json();

        // For status error that don't start with 20x
        if (!status.toString().startsWith("20")) {
          throw new Error(message); // Throw error message
        }

        if (data) {
          dispatch({ type: "fetchSketchAction", fetchSketchData: data });
          setIsFetch(true);
        }
      } catch (err) {
        // Error
        console.error(err.message);
      }
    }
  };

  // Save action
  const saveAction = () => {
    if (sketch.isModified === true) {
      // Only fetch if Sketch is modified
      fetchApi({
        apiUrl: "/sketch/" + sketch._id,
        method: "PATCH",
        body: {
          sketchName: sketch.sketchName,
          isShared: sketch.isShared,
        },
      });
    }
  };

  // Patch Sketch action
  const patchSketchAction = ({ newData }) => {
    dispatch({ type: "updateSketchAction", newData });
  };

  // updatePage

  // Patch element action
  const patchElementAction = ({ newData }) => {
    dispatch({ type: "patchElementAction", newData, selectedElementId, selectedPage });
  };

  // SketchHistory

  return (
    <SketchContext.Provider
      value={{
        sketch,
        selectedSection,
        setSelectedSection,
        selectedElementId,
        setSelectedElementId,
        selectedPage,
        setSelectedPage,
        selectedElement,
        actions: {
          fetchSketchAction,
          saveAction,
          patchSketchAction,
          patchElementAction
        },
      }}
    >
      {children}
    </SketchContext.Provider>
  );
};
