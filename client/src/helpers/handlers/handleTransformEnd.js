// When the user have finished to transform the element
const handleTransformEnd = ({ patchElementAction, elementRef }) => {
  const getElement = elementRef.current; // Get the current element value
  const scaleX = getElement.scaleX();
  const scaleY = getElement.scaleY();

  // Update element
  patchElementAction({
    newData: {
      x: getElement.x(),
      y: getElement.y(),
      width: Math.max(5, getElement.width() * scaleX),
      height: Math.max(5, getElement.height() * scaleY),
    },
  });

  // Reset back the element scale to 1
  getElement.scaleX(1);
  getElement.scaleY(1);
};

export default handleTransformEnd;
