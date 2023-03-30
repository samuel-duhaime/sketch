import { useContext } from "react";
import styled from "styled-components";
import { COLORS } from "../../../helpers/constants/constants";
import { SketchContext } from "../../global/context/SketchContext";
import TextSection from "../sections/TextSection";
import ShapesSection from "../sections/ShapesSection";
import PhotosSection from "../sections/PhotosSection";
import UploadsSection from "../sections/UploadsSection";

const SectionActions = () => {
  const { selectedSection } = useContext(SketchContext); // Sketch Context

  return (
    <SectionActionsContainer>
      {selectedSection === "text" ? (
        <TextSection />
      ) : selectedSection === "shapes" ? (
        <ShapesSection />
      ) : selectedSection === "photos" ? (
        <PhotosSection />
      ) : (
        <UploadsSection />
      )}
    </SectionActionsContainer>
  );
};

const SectionActionsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 350px;
  padding: 20px;
  background-color: ${COLORS.lightBlack};
  color: white;
`;

export default SectionActions;
