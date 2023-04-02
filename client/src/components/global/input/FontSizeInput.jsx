import { useContext } from "react";
import styled from "styled-components";
import { SketchContext } from "../context/SketchContext";
import { COLORS } from "../../../helpers/constants/constants";

// Input to change the fontSize
const FontSizeInput = () => {
  const { selectedElement, actions: { patchElementAction } } = useContext(SketchContext); // Sketch Context

  return (
    <FontSizeContainer>
      {/* Minus button */}
      <Button
        onClick={() => selectedElement?.fontSize > 1 && patchElementAction({ newData: { fontSize: selectedElement?.fontSize - 1 } })}
        style={{ borderRadius: "5px 0 0 5px" }}
      >
        -
      </Button>

      {/* Text fonSize button */}
      <TextInput
        type="text"
        value={selectedElement?.fontSize}
        onChange={(e) => {
          const number = Math.round(e.target.value); // Integer number
          // Only set if it's a number
          if (!Number.isNaN(number)) {
            patchElementAction({ newData: { fontSize: number } })
          }
        }}
      />

      {/* Plus button */}
      <Button
        onClick={() => patchElementAction({ newData: { fontSize: selectedElement?.fontSize + 1 } })}
        style={{ borderRadius: "0 5px 5px 0" }}
      >
        +
      </Button>
    </FontSizeContainer>
  );
};

const FontSizeContainer = styled.div`
  display: flex;
  margin: 0 5px;
`;

const Button = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid ${COLORS.gray};
  background-color: transparent;

  cursor: pointer;

  &:is(:hover, :focus-visible) {
    background-color: ${COLORS.darkGray};
  }
`;

const TextInput = styled.input`
  width: 50px;
  height: 32px;
  text-align: center;
  border: 1px solid ${COLORS.gray};

  &:is(:hover, :focus-visible) {
    background-color: ${COLORS.darkGray};
  }
`;

export default FontSizeInput;
