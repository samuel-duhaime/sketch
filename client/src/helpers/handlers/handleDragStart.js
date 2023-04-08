// When the user start to drag the element
const handleDragStart = ({ setIsDragging, setSelectedElementId, elementId, setSelectedPageId, pageId }) => {
  setIsDragging(true);
  setSelectedElementId(elementId); // Select the element when drag start
  setSelectedPageId(pageId); // Select the page
};

export default handleDragStart;
