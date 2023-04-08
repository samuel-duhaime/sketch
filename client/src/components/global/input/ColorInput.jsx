import { useContext } from "react";
import styled from "styled-components";
import { SketchContext } from "../context/SketchContext";
import { COLORS } from "../../../helpers/constants/constants";

// Color input
const ColorInput = ({ keyName, selectedType = "element" }) => {
  // Sketch Context
  const {
    selectedElement,
    selectedPage,
    actions: { patchElementAction, patchPageAction },
  } = useContext(SketchContext);

  return (
    <>
      <ColorInputElement
        type="color"
        value={
          selectedType === "element" && selectedElement
            ? selectedElement[keyName]
            : selectedType === "page" && selectedPage
            ? selectedPage[keyName]
            : ""
        }
        onChange={(e) => {
          selectedType === "element" && patchElementAction({ newData: { [keyName]: e.target.value } });
          selectedType === "page" &&
            patchPageAction({
              pageId: selectedPage._id,
              pageAction: "modification",
              pageData: { backgroundColor: e.target.value },
            });
        }}
      />
    </>
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
