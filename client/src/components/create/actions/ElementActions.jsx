import { useContext } from "react";
import styled from "styled-components";
import { COLORS, SIZE } from "../../../helpers/constants/constants";
import { SketchContext } from "../../global/context/SketchContext";
import TextActions from "./TextActions";
import ShapeActions from "./ShapeActions";
import ImageActions from "./ImageActions";
import PageActions from "./PageActions";

// Elements actions container
const ElementActions = () => {
  const { selectedElement, selectedPageId } = useContext(SketchContext); // Sketch Context

  return (
    <SectionContainer>
      {selectedElement?.type === "text" ? (
        <TextActions />
      ) : selectedElement?.type === "rectangle" ? (
        <ShapeActions />
      ) : selectedElement?.type === "image" ? (
        <ImageActions />
      ) : selectedPageId ? (
        <PageActions />
      ) : (
        <>No selected element</>
      )}
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  position: fixed;
  top: ${SIZE.topMenuHeight};
  left: calc(${SIZE.sectionsWidth} + ${SIZE.sectionActionsWidth});
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 50px;
  padding: 10px;
  background-color: white;
  box-shadow: ${COLORS.boxShadow};
  clip-path: inset(0 0 -3px 0); // Remove box-shadow except for bottom
  z-index: 1;
`;

export default ElementActions;
