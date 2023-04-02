// TODO: When the user end to drag the element
const handleDragEnd = (ev, { setIsDragging }) => {
  setIsDragging(false);
  // setObject({
  //    ...object,
  //    isDragging: false,
  //    x: ev.target.x(),
  //    y: ev.target.y(),
  // });
};

export default handleDragEnd;
