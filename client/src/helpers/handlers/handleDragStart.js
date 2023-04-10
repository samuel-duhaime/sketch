// When the user start to drag the element
const handleDragStart = ({ setSelectedElementId, elementId, setSelectedPageId, pageId }) => {
  setSelectedElementId(elementId); // Select the element when drag start
  setSelectedPageId(pageId); // Select the page
};

export default handleDragStart;
