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
      return { ...sketch, ...newData, isModified: true };
    }
    case "patchElementAction": {
      // Get the newElements
      const newElements = sketch[selectedPage].elements.map((element) => {
        if (element._id === selectedElementId) {
          return { ...element, ...newData, isModified: true };
        } else {
          return element;
        }
      });
      const newPage = { ...sketch[selectedPage], elements: newElements }; // Get the newPage
      const newSketch = { ...sketch, [selectedPage]: newPage }; // Get the newSketch

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
  const [selectedSection, setSelectedSection] = useState("text"); // Selected section
  const [selectedElementId, setSelectedElementId] = useState(null); // Selected element id
  const [selectedPage, setSelectedPage] = useState("page1"); // Selected page
  const selectedElement = sketch[selectedPage]?.elements?.filter((element) => element._id === selectedElementId)[0]; // Filter the selectedElement
  const pagesKey = Object.keys(sketch).filter((keyName) => keyName.startsWith("page")); // Find all the pages key name

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
    // Save sketch document
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

    // Save elements documents and pages documents
    pagesKey.forEach((page) => {
      // TODO: Save pages documents

      // Every elements from every pages
      sketch[page].elements.forEach((element) => {
        if (element.isModified === true) {
          // Only fetch if element is modified
          fetchApi({
            apiUrl: "/element/" + element._id,
            method: "PATCH",
            body: {
              ...(element.text && { text: element.text }),
              ...(element.x && { x: element.x }),
              ...(element.y && { y: element.y }),
              ...(element.width && { width: element.width }),
              ...(element.height && { height: element.height }),
              ...(element.fontFamily && { fontFamily: element.fontFamily }),
              ...(element.fontSize && { fontSize: element.fontSize }),
              ...(element.color && { color: element.color }),
              ...(element.backgroundColor && { backgroundColor: element.backgroundColor }),
              ...(element.isBold !== undefined && { isBold: element.isBold }),
              ...(element.isItalic !== undefined && { isItalic: element.isItalic }),
              ...(element.isUnderline !== undefined && { isUnderline: element.isUnderline }),
              ...(element.isUppercase !== undefined && { isUppercase: element.isUppercase }),
              ...(element.align && { align: element.align }),
            },
          });
        }
      });
    });
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
          patchElementAction,
        },
      }}
    >
      {children}
    </SketchContext.Provider>
  );
};
