import { useContext } from "react";
import styled from "styled-components";
import { SketchContext } from "../context/SketchContext";
import { COLORS } from "../../../helpers/constants/constants";

// Color input
const ColorInput = ({ keyName }) => {
  // Sketch Context
  const {
    selectedElement,
    actions: { patchElementAction },
  } = useContext(SketchContext);

  return (
    <ColorInputElement
      type="color"
      value={selectedElement[keyName]}
      onChange={(e) => patchElementAction({ newData: { [keyName]: e.target.value } })}
    />
  );
};

const ColorInputElement = styled.input`
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;

  &:is(:hover, :focus-visible) {
    background-color: ${COLORS.darkGray};
  }
`;

export default ColorInput;
