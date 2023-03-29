import { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../../helpers/constants/constants";

const FontSizeInput = () => {
  const [fontSize, setFontSize] = useState(16);

  return (
    <FontSizeContainer>
      <Button
        onClick={() => setFontSize(fontSize - 1)}
        style={{ borderRadius: "5px 0 0 5px" }}
      >
        -
      </Button>
      <TextInput
        type="text"
        value={fontSize}
        onChange={(e) => {
          const number = Math.round(e.target.value);
          setFontSize(!Number.isNaN(number) ? number : fontSize); // Only set if it's a number
        }}
      />
      <Button
        onClick={() => setFontSize(fontSize + 1)}
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
