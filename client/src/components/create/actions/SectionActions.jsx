import { useContext } from "react";
import styled from "styled-components";
import { COLORS, SIZE } from "../../../helpers/constants/constants";
import { SketchContext } from "../../global/context/SketchContext";
import TextSection from "../sections/TextSection";
import ShapesSection from "../sections/ShapesSection";
import TemplatesSection from "../sections/TemplatesSection";
import UploadSection from "../sections/UploadSection";
import LayersSection from "../sections/LayersSection";

const SectionActions = () => {
  const { selectedSection } = useContext(SketchContext); // Sketch Context

  return (
    <SectionActionsContainer>
      {selectedSection === "templates" ? (
        <TemplatesSection />
      ) : selectedSection === "text" ? (
        <TextSection />
      ) : selectedSection === "shapes" ? (
        <ShapesSection />
      ) : selectedSection === "uploads" ? (
        <UploadSection />
      ) : selectedSection === "layers" ? (
        <LayersSection />
      ) : (
        <>No selected section</>
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
