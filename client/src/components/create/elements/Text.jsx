import { Text as TextElement, Transformer } from "react-konva";
import handleDragStart from "../../../helpers/handlers/handleDragStart";
import handleDragEnd from "../../../helpers/handlers/handleDragEnd";
import handleLimitResize from "../../../helpers/handlers/handleLimitResize";
import handleTransformEnd from "../../../helpers/handlers/handleTransformEnd";
import useTransformerElement from "../../../hooks/useTransformerElement";

const Text = ({ element, isSelected, setSelectedElement, draggable = false }) => {
  const { object, setObject, elementRef, transformerRef } = useTransformerElement({ element, isSelected });

  return (
    <>
      <TextElement
        ref={elementRef}
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

export default Text;
