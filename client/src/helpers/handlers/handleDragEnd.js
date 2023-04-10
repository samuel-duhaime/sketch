// When the user end to drag the element
const handleDragEnd = (ev, { patchElementAction }) => {
  patchElementAction({ newData: { x: ev.target.x(), y: ev.target.y() } }); // Update element
};

export default handleDragEnd;
