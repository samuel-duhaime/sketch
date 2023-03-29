import { Rect, Transformer } from "react-konva";
import handleDragStart from "../../../helpers/handlers/handleDragStart";
import handleDragEnd from "../../../helpers/handlers/handleDragEnd";
import handleLimitResize from "../../../helpers/handlers/handleLimitResize";
import handleTransformEnd from "../../../helpers/handlers/handleTransformEnd";
import useTransformerElement from "../../../hooks/useTransformerElement";

const Rectangle = ({ element, isSelected, setSelectedElement, draggable }) => {
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
        onClick={() => setSelectedElement(object._id)}
        onTap={() => setSelectedElement(object._id)}
        onDragStart={() => handleDragStart({ object, setObject })}
        onDragEnd={(ev) => handleDragEnd(ev, { object, setObject })}
        onTransformEnd={() => handleTransformEnd({ elementRef, object, setObject })}
        draggable={draggable}
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
