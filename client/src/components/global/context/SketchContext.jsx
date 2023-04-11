import { createContext, useReducer, useState, useRef } from "react";
import { fetchApi } from "../../../helpers/fetch/fetchApi";
import { alertSuccess } from "../library/Alert";
import { moveInArray } from "../../../helpers/helpers/moveInArray";

export const SketchContext = createContext(); // Create the context

// Initial context sketch
const initialSketch = {};

// Reducer for all the actions type of sketch
const sketchReducer = (sketch, action) => {
  const { type, newData, selectedElementId, selectedPageId } = action; // All the action object

  switch (type) {
    case "fetchSketchAction": {
      return newData;
    }
    case "postElementAction": {
      const newElements = [...sketch[selectedPageId].elements, newData]; // Add the new element to the elements of the page
      const newPage = { ...sketch[selectedPageId], elements: newElements }; // Get the newPage
      const newSketch = { ...sketch, [selectedPageId]: newPage }; // Get the newSketch

      return newSketch;
    }
    case "patchSketchAction": {
      return { ...sketch, ...newData, isModified: true };
    }
    case "patchPageAction": {
      return {
        _id: sketch._id,
        sketchName: sketch.sketchName,
        isShared: sketch.isShared,
        ...newData,
        isModified: true,
      };
    }
    case "patchElementAction": {
      // Get the newElements
      const newElements = sketch[selectedPageId]?.elements?.map((element) => {
        if (element._id === selectedElementId) {
          return { ...element, ...newData, isModified: true };
        } else {
          return element;
        }
      });
      const newPage = { ...sketch?.[selectedPageId], elements: newElements }; // Get the newPage
      const newSketch = { ...sketch, [selectedPageId]: newPage }; // Get the newSketch

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
  const [selectedSection, setSelectedSection] = useState("text"); // Selected section
  const [selectedElementId, setSelectedElementId] = useState(null); // Selected element id
  const [selectedPageId, setSelectedPageId] = useState("page1"); // Selected page
  const [history, setHistory] = useState([]); // History of the Sketch state
  const [historyNumber, setHistoryNumber] = useState(1); // Number of the history of the Sketch state
  const historyLength = history?.length; // Get the number of history Sketch state
  const selectedElement = sketch?.[selectedPageId]?.elements?.filter(
    (element) => element?._id === selectedElementId
  )[0]; // Filter the selectedElement
  const selectedPage = sketch[selectedPageId]; // Get the selectedPage
  const pagesKey = Object.keys(sketch).filter((keyName) => keyName.startsWith("page")); // Set all the pages key
  // Get all the pages
  const pages = pagesKey.map((pageKey) => {
    return { ...sketch[pageKey] };
  });

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

    var imageUrl = stageRef?.current?.getStage().toDataURL({ mimeType: "image/png", quality: 1 }); // Get the imageUrl
    downloadURI({ imageUrl, name: `${sketch.sketchName}.png` }); // // Download an image with an url
  };

  // Undo the last save Sketch history
  const handleUndo = () => {
    if (historyNumber >= 1) {
      dispatch({ type: "fetchSketchAction", newData: history[historyNumber - 1] });
      setHistoryNumber((historyNumber) => {
        return historyNumber - 1;
      });
    }
  };

  // Redo the last save Sketch history
  const handleRedo = () => {
    if (historyNumber < historyLength) {
      dispatch({ type: "fetchSketchAction", newData: history[historyNumber] });
      setHistoryNumber((historyNumber) => {
        return historyNumber + 1;
      });
    }
  };

  // Save action
  const saveAction = () => {
    // Push the sketch in the history
    setHistory((history) => {
      const newHistory = [...history?.slice(-9), sketch]; // Only have the last 10 Sketch history state
      setHistoryNumber(newHistory.length);
      return newHistory;
    });

    var imageUrl = stageRef?.current?.getStage().toDataURL({ mimeType: "image/png", quality: 1 }); // Get the imageUrl

    // Save sketch document
    // if (sketch.isModified === true || sketch.page1.isModified === true) {
    const newPages = pages.map((page) => {
      return { ...page, elements: page?.elements?.map((element) => element._id) };
    });

    // Only fetch if Sketch is modified
    fetchApi({
      apiUrl: "/sketch/" + sketch._id,
      method: "PUT",
      body: {
        sketchName: sketch.sketchName,
        isShared: sketch.isShared,
        imageUrl,
        pages: newPages,
      },
    });
    // }

    // Save elements documents and pages documents
    pagesKey.forEach((page) => {
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
              ...(element.radiusX && { radiusX: element.radiusX }),
              ...(element.radiusY && { radiusY: element.radiusY }),
              ...(element.rotation !== undefined && { rotation: element.rotation }),
              ...(element.fontFamily && { fontFamily: element.fontFamily }),
              ...(element.fontSize && { fontSize: element.fontSize }),
              ...(element.color && { color: element.color }),
              ...(element.backgroundColor && { backgroundColor: element.backgroundColor }),
              ...(element.isBold !== undefined && { isBold: element.isBold }),
              ...(element.isItalic !== undefined && { isItalic: element.isItalic }),
              ...(element.isUnderline !== undefined && { isUnderline: element.isUnderline }),
              ...(element.isUppercase !== undefined && { isUppercase: element.isUppercase }),
              ...(element.align && { align: element.align }),
              ...(element.isDelete !== undefined && { isDelete: element.isDelete }),
            },
          });
        }
      });
    });
  };

  // Fetch sketch action
  const fetchSketchAction = async ({ sketchId }) => {
    if (historyLength === 0) {
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
          dispatch({ type: "fetchSketchAction", newData: data }); // Fetch only one time
          setHistory([data]); // Push the sketch in the history
        }
      } catch (err) {
        // Error
        console.error(err.message);
      }
    }
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
          pageKey: selectedPageId,
          type: newData.type,
          ...(newData.text && { text: newData.text }),
          ...(newData.imageUrl && { imageUrl: newData.imageUrl }),
          x: newData.x,
          y: newData.y,
          ...(newData.width && { width: newData.width }),
          ...(newData.height && { height: newData.height }),
          ...(newData.radiusX && { radiusX: newData.radiusX }),
          ...(newData.radiusY && { radiusY: newData.radiusY }),
          rotation: newData.rotation,
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
        dispatch({ type: "postElementAction", newData: { ...newData, _id: data }, selectedPageId });
        alertSuccess({ message: `Element created` });
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

  // Patch page action
  const patchPageAction = ({ pageId, pageAction, pageNumber, pageData, elementId }) => {
    let newPages; // Get all the new pages
    let newData; // Get the new data for Sketch

    // Move the page up
    if (pageNumber && pageAction === "movePageUp" && pageNumber > 1) {
      // Move the value at a new position inside the array
      moveInArray({ array: pages, oldIndex: pageNumber - 1, newIndex: pageNumber - 2 });

      // Update the pages
      newPages = pages.map((page, index) => {
        return { ...page, _id: `page${index + 1}`, page: index + 1 };
      });
    }

    // Move the page down
    if (pageNumber && pageAction === "movePageDown" && pageNumber < pagesKey?.length) {
      // Move the value at a new position inside the array
      moveInArray({ array: pages, oldIndex: pageNumber - 1, newIndex: pageNumber });

      // Update the pages
      newPages = pages.map((page, index) => {
        return { ...page, _id: `page${index + 1}`, page: index + 1 };
      });
    }

    // Move the element up
    if (pageAction === "moveElementUp" && elementId) {
      const pageElements = sketch[selectedPageId].elements; // Get all the elements of the page
      const findElementIndex = pageElements.map((page) => page._id).indexOf(elementId); // Find the index of the element

      // Move the value at a new position inside the array
      moveInArray({ array: pageElements, oldIndex: findElementIndex, newIndex: findElementIndex + 1 });
      alertSuccess({ message: "Element moved up" });

      // Update the elements page
      newPages = pages.map((page) => {
        if (page._id === selectedPageId) {
          return { ...page, elements: pageElements };
        } else {
          return page;
        }
      });
    }

    // Move the element down
    if (pageAction === "moveElementDown" && elementId) {
      const pageElements = sketch[selectedPageId].elements; // Get all the elements of the page
      const findElementIndex = pageElements.map((page) => page._id).indexOf(elementId); // Find the index of the element

      // Move the value at a new position inside the array
      moveInArray({ array: pageElements, oldIndex: findElementIndex, newIndex: findElementIndex - 1 });
      alertSuccess({ message: "Element moved down" });

      // Update the elements page
      newPages = pages.map((page) => {
        if (page._id === selectedPageId) {
          return { ...page, elements: pageElements };
        } else {
          return page;
        }
      });
    }

    // Modify the page with backgroundColor or pageName
    if (pageId && pageAction === "modification" && pageData) {
      newPages = pages.map((page) => {
        if (page._id === pageId) {
          return {
            ...page,
            ...(pageData?.backgroundColor && { backgroundColor: pageData?.backgroundColor }),
            ...(pageData?.pageName && { pageName: pageData?.pageName }),
          };
        } else {
          return { ...page };
        }
      });
    }

    // Delete page
    if (pageId && pageAction === "delete") {
      // Filter the delete page
      newPages = pages
        .filter((page) => {
          return page._id !== pageId;
        })
        .map((page, index) => {
          return { ...page, _id: `page${index + 1}`, page: index + 1 };
        });
    }

    // Add a new page
    if (pageNumber && pageAction === "add") {
      // Insert a new element at pageNumber
      pages.splice(pageNumber, 0, {
        _id: null,
        page: null,
        pageName: "Undefined",
        width: 800,
        height: 550,
        backgroundColor: "#ffffff",
        elements: [],
      });
      newPages = pages.map((page, index) => {
        return { ...page, _id: `page${index + 1}`, page: index + 1 };
      });
    }

    // Get the newData pages
    newPages.forEach((page) => {
      newData = { ...newData, [page._id]: page };
    });

    dispatch({ type: "patchPageAction", newData });
  };

  // Patch element action
  const patchElementAction = ({ newData }) => {
    dispatch({ type: "patchElementAction", newData, selectedElementId, selectedPageId });
  };

  return (
    <SketchContext.Provider
      value={{
        sketch,
        stageRef,
        handleDownload,
        handleUndo,
        handleRedo,
        selectedSection,
        setSelectedSection,
        selectedElementId,
        setSelectedElementId,
        selectedPageId,
        setSelectedPageId,
        selectedElement,
        selectedPage,
        historyNumber,
        historyLength,
        pagesKey,
        actions: {
          fetchSketchAction,
          saveAction,
          postElementAction,
          patchSketchAction,
          patchPageAction,
          patchElementAction,
        },
      }}
    >
      {children}
    </SketchContext.Provider>
  );
};
