import { Image as ImageElement, Transformer } from "react-konva";
import useImage from "use-image";
import handleDragStart from "../../../helpers/handlers/handleDragStart";
import handleDragEnd from "../../../helpers/handlers/handleDragEnd";
import handleLimitResize from "../../../helpers/handlers/handleLimitResize";
import handleTransformEnd from "../../../helpers/handlers/handleTransformEnd";
import useTransformerElement from "../../../hooks/useTransformerElement";

// Image element
const Image = ({ element, isSelected, setSelectedElementId, draggable }) => {
  const { isDragging, setIsDragging, elementRef, transformerRef } = useTransformerElement({ element, isSelected });
  const [imageUrl] = useImage(element.imageUrl);

  return (
    <>
      <ImageElement
        ref={elementRef}
        image={imageUrl}
        x={element.x}
        y={element.y}
        width={element.width}
        height={element.height}
        onClick={() => setSelectedElementId(element._id)}
        onTap={() => setSelectedElementId(element._id)}
        onDragStart={() => handleDragStart({ setIsDragging })}
        onDragEnd={(ev) => handleDragEnd(ev, { setIsDragging })}
        // onTransformEnd={() => handleTransformEnd({ elementRef, object, setObject })}
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

export default Image;
