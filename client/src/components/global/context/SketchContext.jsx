import { createContext, useReducer, useState, useRef } from "react";
import { fetchApi } from "../../../helpers/fetch/fetchApi";

export const SketchContext = createContext(); // Create the context

// Initial context sketch
const initialSketch = {};

// Reducer for all the actions type of sketch
const sketchReducer = (sketch, action) => {
  const { type, newData, selectedElementId, selectedPage } = action; // All the action object

  switch (type) {
    case "fetchSketchAction": {
      return newData;
    }
    case "postElementAction": {
      const newElements = [...sketch[selectedPage].elements, newData]; // Add the new element to the elements of the page
      const newPage = { ...sketch[selectedPage], elements: newElements }; // Get the newPage
      const newSketch = { ...sketch, [selectedPage]: newPage }; // Get the newSketch

      return newSketch;
    }
    case "patchSketchAction": {
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

      return newSketch;
    }
    default: {
      throw new Error(`Invalid type: ${type}`);
    }
  }
};

// Context user provider
export const SketchProvider = ({ children }) => {
  const [sketch, dispatch] = useReducer(sketchReducer, initialSketch);
  const stageRef = useRef(null); // Stage ref for download
  const [isFetch, setIsFetch] = useState(false); // Only fetch one time
  const [selectedSection, setSelectedSection] = useState("text"); // Selected section
  const [selectedElementId, setSelectedElementId] = useState(null); // Selected element id
  const [selectedPage, setSelectedPage] = useState("page1"); // Selected page
  const selectedElement = sketch[selectedPage]?.elements?.filter((element) => element._id === selectedElementId)[0]; // Filter the selectedElement
  const pagesKey = Object.keys(sketch).filter((keyName) => keyName.startsWith("page")); // Set all the pages key

  // Handle download
  const handleDownload = async () => {
    // Download an image with an url
    const downloadURI = ({ imageUrl, name }) => {
      var link = document.createElement("a"); // Create a link
      link.download = name; // Name of the download
      link.href = imageUrl; //
      document.body.appendChild(link); // Join the link
      link.click(); // Click the link
      document.body.removeChild(link); // Cleanup
    };

    var imageUrl = stageRef.current?.getStage().toDataURL({ mimeType: "image/png", quality: 1 }); // Get the imageUrl
    downloadURI({ imageUrl, name: `${sketch.sketchName}.png` }); // // Download an image with an url
  };

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
          dispatch({ type: "fetchSketchAction", newData: data });
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
              ...(element.imageUrl && { imageUrl: element.imageUrl }),
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

  // Post element action
  const postElementAction = async ({ newData }) => {
    try {
      // Post element
      const fetchResult = await fetch("/element/" + sketch._id, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pageKey: selectedPage,
          type: newData.type,
          ...(newData.text && { text: newData.text }),
          ...(newData.imageUrl && { imageUrl: newData.imageUrl }),
          x: newData.x,
          y: newData.y,
          width: newData.width,
          height: newData.height,
          ...(newData.fontFamily && { fontFamily: newData.fontFamily }),
          ...(newData.fontSize && { fontSize: newData.fontSize }),
          ...(newData.color && { color: newData.color }),
          ...(newData.backgroundColor && { backgroundColor: newData.backgroundColor }),
          ...(newData.isBold !== undefined && { isBold: newData.isBold }),
          ...(newData.isItalic !== undefined && { isItalic: newData.isItalic }),
          ...(newData.isUnderline !== undefined && { isUnderline: newData.isUnderline }),
          ...(newData.isUppercase !== undefined && { isUppercase: newData.isUppercase }),
          ...(newData.align && { align: newData.align }),
        }),
      });

      const { data, status, message } = await fetchResult.json(); // Get the json response

      // For status error that don't start with 20x
      if (!status.toString().startsWith("20")) {
        throw new Error(message); // Throw error message
      }

      // If everything is good
      if (data) {
        dispatch({ type: "postElementAction", newData: { ...newData, _id: data }, selectedPage });
      }
    } catch (err) {
      // Error
      console.error(err.message);
    }
  };

  // Patch Sketch action
  const patchSketchAction = ({ newData }) => {
    dispatch({ type: "patchSketchAction", newData });
  };

  // TODO: updatePage

  // Patch element action
  const patchElementAction = ({ newData }) => {
    dispatch({ type: "patchElementAction", newData, selectedElementId, selectedPage });
  };

  // TODO: SketchHistory

  return (
    <SketchContext.Provider
      value={{
        sketch,
        stageRef,
        handleDownload,
        selectedSection,
        setSelectedSection,
        selectedElementId,
        setSelectedElementId,
        selectedPage,
        setSelectedPage,
        selectedElement,
        pagesKey,
        actions: {
          fetchSketchAction,
          saveAction,
          postElementAction,
          patchSketchAction,
          patchElementAction,
        },
      }}
    >
      {children}
    </SketchContext.Provider>
  );
};
