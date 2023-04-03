// When the user end to drag the element
const handleDragEnd = (ev, { setIsDragging, patchElementAction }) => {
  setIsDragging(false);

  patchElementAction({ newData: { x: ev.target.x(), y: ev.target.y() } }); // Update element
};

export default handleDragEnd;
