// When the user have finished to transform the element
const handleTransform = ({ patchElementAction, elementRef }) => {
  const getElement = elementRef.current; // Get the current element value
  const scaleX = getElement.scaleX?.();
  const scaleY = getElement.scaleY?.();
  const width = getElement.width?.();
  const height = getElement.height?.();

  // Get the new Data
  const newData = {
    x: getElement.x(),
    y: getElement.y(),
    ...(width && { width: Math.max(5, width * scaleX) }),
    ...(height && { height: Math.max(5, height * scaleY) }),
    ...(getElement?.radiusX?.() && { radiusX: getElement?.radiusX?.() * scaleX }), // For ellipsis
    ...(getElement?.radiusY?.() && { radiusY: getElement?.radiusY?.() * scaleY }), // For ellipsis
    rotation: getElement.rotation(),
  };

  // Update element
  patchElementAction({
    newData,
  });

  // Reset back the element scale to 1
  getElement.scaleX(1);
  getElement.scaleY(1);
};

export default handleTransform;
