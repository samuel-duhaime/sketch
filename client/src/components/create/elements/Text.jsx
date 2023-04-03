import { useContext } from "react";
import { Text as TextElement, Transformer } from "react-konva";
import { SketchContext } from "../../global/context/SketchContext";
import handleDragStart from "../../../helpers/handlers/handleDragStart";
import handleDragEnd from "../../../helpers/handlers/handleDragEnd";
import handleLimitResize from "../../../helpers/handlers/handleLimitResize";
import handleTransformEnd from "../../../helpers/handlers/handleTransformEnd";
import useTransformerElement from "../../../hooks/useTransformerElement";

// Text element
const Text = ({ element, isSelected, setSelectedElementId, draggable }) => {
  const { isDragging, setIsDragging, elementRef, transformerRef } = useTransformerElement({ isSelected });

  // Sketch Context
  const {
    actions: { patchElementAction },
  } = useContext(SketchContext);

  return (
    <>
      <TextElement
        ref={elementRef}
        text={element.text}
        x={element.x}
        y={element.y}
        width={element.width}
        fontFamily={element.fontFamily}
        fontSize={element.fontSize}
        fontStyle={
          element.isItalic && element.isBold
            ? "italic bold"
            : element.isItalic
            ? "italic"
            : element.isBold
            ? "bold"
            : "normal"
        }
        fontVariant={element.isUppercase ? "small-caps" : "normal"}
        textDecoration={element.isUnderline ? "underline" : ""}
        align={element.align}
        fill={element.color}
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

export default Text;
