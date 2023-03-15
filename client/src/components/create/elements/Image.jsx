import { useState } from "react";
import { Image as ImageElement } from "react-konva";
import useImage from "use-image";

const Image = () => {
   const [object, setObject] = useState({ isDragging: false, x: 100, y: 250 });
   const [image] = useImage(
      "https://media.istockphoto.com/id/877369086/photo/lion-panthera-leo-10-years-old-isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=MtufCstPNz2yrQSEkkcTSJXizr3RCV_VwMT3e4VUVdY="
   );

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
         image={image}
         width={200}
         height={100}
         x={object.x}
         y={object.y}
         onDragStart={handleDragStart}
         onDragEnd={handleDragEng}
         draggable
      />
   );
};

export default Image;
