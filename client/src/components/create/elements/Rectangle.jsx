import { useContext } from "react";
import { Rect, Transformer } from "react-konva";
import { SketchContext } from "../../global/context/SketchContext";
import handleDragStart from "../../../helpers/handlers/handleDragStart";
import handleDragEnd from "../../../helpers/handlers/handleDragEnd";
import handleLimitResize from "../../../helpers/handlers/handleLimitResize";
import handleTransformEnd from "../../../helpers/handlers/handleTransformEnd";
import useTransformerElement from "../../../hooks/useTransformerElement";

// Rectangle element
const Rectangle = ({ element, isSelected, setSelectedElementId, draggable }) => {
  const { isDragging, setIsDragging, elementRef, transformerRef } = useTransformerElement({ isSelected });

  // Sketch Context
  const {
    actions: { patchElementAction },
  } = useContext(SketchContext);

  return (
    <>
      <Rect
        ref={elementRef}
        x={element.x}
        y={element.y}
        width={element.width}
        height={element.height}
        fill={element.backgroundColor}
        onClick={() => setSelectedElementId(element._id)}
        onTap={() => setSelectedElementId(element._id)}
        onDragStart={() => handleDragStart({ setIsDragging, setSelectedElementId, elementId: element._id })}
        onDragEnd={(ev) => handleDragEnd(ev, { setIsDragging, patchElementAction })}
        onTransformEnd={() => handleTransformEnd({ elementRef, patchElementAction })}
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
