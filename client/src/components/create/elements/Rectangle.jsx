import { Rect, Transformer } from "react-konva";
import handleDragStart from "../../../helpers/handler/handleDragStart";
import handleDragEnd from "../../../helpers/handler/handleDragEnd";
import handleLimitResize from "../../../helpers/handler/handleLimitResize";
import handleTransformEnd from "../../../helpers/handler/handleTransformEnd";
import useTransformerElement from "../../../hooks/useTransformerElement";

const Rectangle = ({ element, isSelected, setSelectedElement }) => {
   const { object, setObject, elementRef, transformerRef } = useTransformerElement({ element, isSelected });

   return (
      <>
         <Rect
            ref={elementRef}
            x={object.x}
            y={object.y}
            width={object.width}
            height={object.height}
            fill={object.isDragging ? "green" : object.backgroundColor}
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

export default Rectangle;
