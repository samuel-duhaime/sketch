import { useState } from "react";
import { Image as ImageElement } from "react-konva";
import useImage from "use-image";

const Image = ({ element }) => {
   const [object, setObject] = useState({ ...element, isDragging: false });
   const [imageUrl] = useImage(object.imageUrl);

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
      <ImageElement
         image={imageUrl}
         width={object.width}
         height={object.height}
         x={object.x}
         y={object.y}
         onDragStart={handleDragStart}
         onDragEnd={handleDragEng}
         draggable
      />
   );
};

export default Image;
