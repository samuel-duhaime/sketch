import { Image as ImageElement, Transformer } from "react-konva";
import useImage from "use-image";
import handleDragStart from "../../../helpers/handlers/handleDragStart";
import handleDragEnd from "../../../helpers/handlers/handleDragEnd";
import handleLimitResize from "../../../helpers/handlers/handleLimitResize";
import handleTransformEnd from "../../../helpers/handlers/handleTransformEnd";
import useTransformerElement from "../../../hooks/useTransformerElement";

const Image = ({ element, isSelected, setSelectedElement, draggable }) => {
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

export default Image;
