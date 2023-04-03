// When the user start to drag the element
const handleDragStart = ({ setIsDragging, setSelectedElementId, elementId }) => {
  setIsDragging(true);

  setSelectedElementId(elementId); // Select the element when drag start
};

export default handleDragStart;
