import { useContext } from "react";
import { Image as ImageElement, Transformer } from "react-konva";
import useImage from "use-image";
import { SketchContext } from "../../global/context/SketchContext";
import handleDragStart from "../../../helpers/handlers/handleDragStart";
import handleDragEnd from "../../../helpers/handlers/handleDragEnd";
import handleLimitResize from "../../../helpers/handlers/handleLimitResize";
import handleTransformEnd from "../../../helpers/handlers/handleTransformEnd";
import useTransformerElement from "../../../hooks/useTransformerElement";

// Image element
const Image = ({ element, pageId, isSelected, draggable }) => {
  const { isDragging, setIsDragging, elementRef, transformerRef } = useTransformerElement({ element, isSelected });
  const [imageUrl] = useImage(element.imageUrl);

  // Sketch Context
  const {
    setSelectedElementId,
    setSelectedPageId,
    actions: { patchElementAction },
  } = useContext(SketchContext);

  return (
    <>
      <ImageElement
        ref={elementRef}
        image={imageUrl}
        x={element.x}
        y={element.y}
        width={element.width}
        height={element.height}
        onClick={() => {
          setSelectedElementId(element._id);
          setSelectedPageId(pageId);
        }}
        onTap={() => {
          setSelectedElementId(element._id);
          setSelectedPageId(pageId);
        }}
        onDragStart={() =>
          handleDragStart({ setIsDragging, setSelectedElementId, elementId: element._id, setSelectedPageId, pageId })
        }
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

export default Image;
