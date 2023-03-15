import { useState } from "react";
import { Text as TextElement } from "react-konva";

const Text = () => {
   const [object, setObject] = useState({ isDragging: false, x: 50, y: 50 });

   const handleDragStart = () => {
      setObject({
         ...object,
         isDragging: true,
      });
   };

   const handleDragEng = (ev) => {
      setObject({
         ...object,
         isDragging: false,
         x: ev.target.x(),
         y: ev.target.y(),
      });
   };

   return (
      <TextElement
         text="Draggable Text"
         x={object.x}
         y={object.y}
         fill={object.isDragging ? "green" : "black"}
         onDragStart={handleDragStart}
         onDragEnd={handleDragEng}
         draggable
      />
   );
};

export default Text;
