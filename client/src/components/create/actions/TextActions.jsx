import { useContext } from "react";
import styled from "styled-components";
import { SketchContext } from "../../global/context/SketchContext";
import FontSizeInput from "../../global/input/FontSizeInput";
import ColorInput from "../../global/input/ColorInput";
import ButtonIcon from "../../global/button/ButtonIcon";
import VerticalLine from "../../global/lines/VerticalLine";
import FontAwesomeIcon from "../../global/library/FontAwesomeIcon";
import SelectOptions from "../../global/input/SelectOptions";
import Layers from "../../global/button/Layers";
import DuplicateElement from "../../global/button/DuplicateElement";
import DeleteElement from "../../global/button/DeleteElement";

// Text actions
const TextActions = () => {
  const {
    selectedElement,
    actions: { patchElementAction },
  } = useContext(SketchContext); // Sketch Context

  return (
    <>
      {/* Font family */}
      <SelectOptions />

      {/* Font Size */}
      <FontSizeInput />

      {/* Color */}
      <ColorInput keyName="color" />

      {/* Bold */}
      <ButtonIcon
        isActive={selectedElement?.isBold}
        onClick={() => patchElementAction({ newData: { isBold: !selectedElement.isBold } })}
      >
        <Bold>B</Bold>
      </ButtonIcon>

      {/* Italic */}
      <ButtonIcon
        isActive={selectedElement?.isItalic}
        onClick={() => patchElementAction({ newData: { isItalic: !selectedElement.isItalic } })}
      >
        <Italic>I</Italic>
      </ButtonIcon>

      {/* Underline */}
      <ButtonIcon
        isActive={selectedElement?.isUnderline}
        onClick={() => patchElementAction({ newData: { isUnderline: !selectedElement.isUnderline } })}
      >
        <Underline>U</Underline>
      </ButtonIcon>

      {/* UpperCase */}
      <ButtonIcon
        isActive={selectedElement?.isUppercase}
        onClick={() => patchElementAction({ newData: { isUppercase: !selectedElement.isUppercase } })}
      >
        <div>Aa</div>
      </ButtonIcon>

      <VerticalLine />

      {/* Align */}
      <ButtonIcon
        onClick={() => {
          const newAlign =
            selectedElement?.align === "left" ? "center" : selectedElement?.align === "center" ? "right" : "left";
          patchElementAction({ newData: { align: newAlign } });
        }}
      >
        <FontAwesomeIcon
          icon={
            selectedElement.align === "left"
              ? "faAlignLeft"
              : selectedElement.align === "right"
              ? "faAlignRight"
              : "faAlignCenter"
          }
        />
      </ButtonIcon>

      <VerticalLine />

      {/* Layers */}
      <Layers />

      <VerticalLine />

      {/* Duplicate */}
      <DuplicateElement />

      {/* Delete */}
      <DeleteElement />
    </>
  );
};

const Bold = styled.span`
  font-weight: 700;
`;

const Italic = styled.span`
  font-style: italic;
`;

const Underline = styled.span`
  text-decoration: underline;
`;

export default TextActions;
