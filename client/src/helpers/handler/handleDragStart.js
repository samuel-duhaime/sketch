// When the user start to drag the element
const handleDragStart = ({ object, setObject }) => {
   setObject({
      ...object,
      isDragging: true,
   });
};

export default handleDragStart;
