import { useState } from "react";
import { Text as TextElement } from "react-konva";

const Text = ({ element }) => {
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
      <TextElement
         text={object.text}
         x={object.x}
         y={object.y}
         width={object.width}
         fontFamily={object.fontFamily}
         fontSize={object.fontSize}
         fontStyle={
            object.isItalic && object.isBold
               ? "italic bold"
               : object.isItalic
               ? "italic"
               : object.isBold
               ? "bold"
               : "normal"
         }
         fontVariant={object.isUppercase ? "small-caps" : "normal"}
         textDecoration={object.isUnderline ? "underline" : ""}
         align={object.align}
         opacity={object.opacity}
         fill={object.isDragging ? "green" : "black"}
         onDragStart={handleDragStart}
         onDragEnd={handleDragEng}
         draggable
      />
   );
};

export default Text;
