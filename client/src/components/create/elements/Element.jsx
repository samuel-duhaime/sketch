import { useContext } from "react";
import { Text, Rect, Ellipse, Arrow, Line, Image, Transformer } from "react-konva";
import useImage from "use-image";
import { SketchContext } from "../../global/context/SketchContext";
import handleTextEdit from "../../../helpers/handlers/handleTextEdit";
import handleDragStart from "../../../helpers/handlers/handleDragStart";
import handleDragEnd from "../../../helpers/handlers/handleDragEnd";
import handleLimitResize from "../../../helpers/handlers/handleLimitResize";
import handleTransform from "../../../helpers/handlers/handleTransform";
import useTransformerElement from "../../../hooks/useTransformerElement";

// FIXME: Bug with handleTransform for Arrow and Line
// Element ("Rectangle" || "Text" || "Image")
const Rectangle = ({ element, pageId, isSelected, draggable }) => {
  const { elementRef, transformerRef } = useTransformerElement({ isSelected }); // Hook to transform the element
  const [imageUrl] = useImage(element?.imageUrl); // Use the image inside React-Konva

  // Sketch Context
  const {
    stageRef,
    setSelectedElementId,
    setSelectedPageId,
    actions: { patchElementAction },
  } = useContext(SketchContext);

  // Common props for the element
  const elementCommonProps = {
    ref: elementRef,
    x: element?.x,
    y: element?.y,
    rotation: element?.rotation,
    onClick: () => {
      setSelectedElementId(element?._id);
      setSelectedPageId(pageId);
    },
    onTap: () => {
      setSelectedElementId(element?._id);
      setSelectedPageId(pageId);
    },
    onDragStart: () => handleDragStart({ setSelectedElementId, elementId: element?._id, setSelectedPageId, pageId }),
    onDragEnd: (ev) => handleDragEnd(ev, { patchElementAction }),
    draggable: draggable,
  };

  return (
    <>
      {element?.type === "text" ? (
        // Text element
        <Text
          {...elementCommonProps}
          text={element?.text}
          width={element?.width}
          height={element?.height}
          fontFamily={element?.fontFamily}
          fontSize={element?.fontSize}
          fontStyle={
            element?.isItalic && element?.isBold
              ? "italic bold"
              : element?.isItalic
              ? "italic"
              : element?.isBold
              ? "bold"
              : "normal"
          }
          fontVariant={element?.isUppercase ? "small-caps" : "normal"}
          textDecoration={element?.isUnderline ? "underline" : ""}
          align={element?.align}
          fill={element?.color}
          onDblTap={(ev) => handleTextEdit(ev, { element, elementRef, stageRef, transformerRef, patchElementAction })}
          onDblClick={(ev) => handleTextEdit(ev, { element, elementRef, stageRef, transformerRef, patchElementAction })}
          onTransform={() => handleTransform({ elementRef, patchElementAction })}
        />
      ) : element?.type === "rectangle" ? (
        // Rectangle element
        <Rect
          {...elementCommonProps}
          width={element?.width}
          height={element?.height}
          cornerRadius={element?.cornerRadius}
          fill={element?.backgroundColor}
          onTransformEnd={() => handleTransform({ elementRef, patchElementAction })}
        />
      ) : element?.type === "ellipse" ? (
        // Ellipse element
        <Ellipse
          {...elementCommonProps}
          radiusX={element?.radiusX}
          radiusY={element?.radiusY}
          fill={element?.backgroundColor}
          onTransformEnd={() => handleTransform({ elementRef, patchElementAction })}
        />
      ) : element?.type === "arrow" ? (
        // Arrow element
        <Arrow
          {...elementCommonProps}
          points={element?.points}
          pointerLength={element?.pointerLength}
          pointerWidth={element?.pointerWidth}
          stroke={element?.backgroundColor}
          strokeWidth={element?.strokeWidth}
          onTransformEnd={() => handleTransform({ elementRef, patchElementAction })}
        />
      ) : element?.type === "line" ? (
        // Arrow element
        <Line
          {...elementCommonProps}
          points={element?.points}
          stroke={element?.backgroundColor}
          strokeWidth={element?.strokeWidth}
          onTransformEnd={() => handleTransform({ elementRef, patchElementAction })}
        />
      ) : element?.type === "image" ? (
        // Image element
        <Image
          {...elementCommonProps}
          image={imageUrl}
          width={element?.width}
          height={element?.height}
          onTransformEnd={() => handleTransform({ elementRef, patchElementAction })}
        />
      ) : null}

      {isSelected && (
        /* Transform the element */
        <Transformer
          ref={transformerRef}
          boundBoxFunc={handleLimitResize}
          rotationSnaps={[0, 90, 180, 270]} // Snap at rotation
          rotationSnapTolerance={5} // Snap at x degres of target
          // enabledAnchors={element?.type === "text" ? ["middle-left", "middle-right"] : null} // Enabled anchors depending of the type
        />
      )}
    </>
  );
};

export default Rectangle;
