import { useContext } from "react";
import styled from "styled-components";
import { COLORS, SIZE } from "../../../helpers/constants/constants";
import { SketchContext } from "../../global/context/SketchContext";
import TextSection from "../sections/TextSection";
import ShapesSection from "../sections/ShapesSection";
// import PhotosSection from "../sections/PhotosSection";
import UploadSection from "../sections/UploadSection";

const SectionActions = () => {
  const { selectedSection } = useContext(SketchContext); // Sketch Context

  return (
    <SectionActionsContainer>
      {selectedSection === "text" ? (
        <TextSection />
      ) : selectedSection === "shapes" ? (
        <ShapesSection />
      ) : (
        <UploadSection />
      )}
    </SectionActionsContainer>
  );
};

const SectionActionsContainer = styled.section`
  position: fixed;
  top: ${SIZE.topMenuHeight};
  bottom: 0;
  left: ${SIZE.sectionsWidth};
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: ${SIZE.sectionActionsWidth};
  min-height: calc(100vh - ${SIZE.topMenuHeight});
  padding: 20px;
  background-color: ${COLORS.lightBlack};
  color: white;
  overflow-y: auto;
`;

export default SectionActions;
