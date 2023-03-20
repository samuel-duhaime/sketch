// When the user have finished to transform the element
const handleTransformEnd = ({ elementRef, object, setObject }) => {
   const getElement = elementRef.current; // Get the current element value

   setObject({
      ...object,
      x: getElement.x(),
      y: getElement.y(),
      width: Math.max(5, getElement.width() ),
      height: Math.max(5, getElement.height() ),
   });
};

export default handleTransformEnd;
