import { createContext, useReducer, useState } from "react";
import { fetchApi } from "../../../helpers/fetch/fetchApi";

export const SketchContext = createContext(); // Create the context

// Initial context sketch
const initialSketch = {};

// Reducer for all the actions type of sketch
const sketchReducer = (sketch, action) => {
  const { type, fetchSketchData, newSketch } = action; // All the action object

  switch (type) {
    case "fetchSketchAction": {
      return { ...fetchSketchData };
    }
    case "updateSketchAction": {
      return { ...sketch, isModified: true, ...newSketch };
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
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedPage, setSelectedPage] = useState(null);

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
      // Only do if Sketch is modified
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
  const patchSketchAction = ({ newSketch }) => {
    dispatch({ type: "updateSketchAction", newSketch: newSketch });
  };

  // updatePage
  // updateElement
  // Save
  // SketchHistory

  return (
    <SketchContext.Provider
      value={{
        sketch,
        selectedSection,
        // setSketchId,
        setSelectedSection,
        selectedElement,
        setSelectedElement,
        selectedPage,
        setSelectedPage,
        actions: {
          fetchSketchAction,
          saveAction,
          patchSketchAction,
        },
      }}
    >
      {children}
    </SketchContext.Provider>
  );
};
