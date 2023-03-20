import { useState } from "react";
import { Rect } from "react-konva";

const Rectangle = ({ element }) => {
   const [object, setObject] = useState({ ...element, isDragging: false });

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
      <Rect
         width={200}
         height={100}
         x={object.x}
         y={object.y}
         fill={object.isDragging ? "green" : object.backgroundColor}
         onDragStart={handleDragStart}
         onDragEnd={handleDragEng}
         draggable
      />
   );
};

export default Rectangle;
