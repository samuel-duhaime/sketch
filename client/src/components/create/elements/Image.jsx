import { Image as ImageElement, Transformer } from "react-konva";
import useImage from "use-image";
import handleDragStart from "../../../helpers/handler/handleDragStart";
import handleDragEnd from "../../../helpers/handler/handleDragEnd";
import handleLimitResize from "../../../helpers/handler/handleLimitResize";
import handleTransformEnd from "../../../helpers/handler/handleTransformEnd";
import useTransformerElement from "../../../hooks/useTransformerElement";

const Image = ({ element, isSelected, setSelectedElement }) => {
   const { object, setObject, elementRef, transformerRef } = useTransformerElement({ element, isSelected });
   const [imageUrl] = useImage(object.imageUrl);

   return (
      <>
         <ImageElement
            ref={elementRef}
            image={imageUrl}
            x={object.x}
            y={object.y}
            width={object.width}
            height={object.height}
            onClick={() => setSelectedElement(object.id)}
            onTap={() => setSelectedElement(object.id)}
            onDragStart={() => handleDragStart({ object, setObject })}
            onDragEnd={(ev) => handleDragEnd(ev, { object, setObject })}
            onTransformEnd={() => handleTransformEnd({ elementRef, object, setObject })}
            draggable
         />
         {isSelected && (
            /* Transform the element */
            <Transformer
               ref={transformerRef}
               boundBoxFunc={handleLimitResize}
            />
         )}
      </>
   );
};

export default Image;
