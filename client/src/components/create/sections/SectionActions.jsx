import styled from "styled-components";
import { COLORS } from "../../../helpers/contants/constants";
import TextSection from "./TextSection";
import ShapesSection from "./ShapesSection";
import PhotosSection from "./PhotosSection";
import UploadsSection from "./UploadsSection";

const SectionActions = ({ section }) => {
   return (
      <SectionActionsContainer>
         {section === "text" ? (
            <TextSection />
         ) : section === "shapes" ? (
            <ShapesSection />
         ) : section === "photos" ? (
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
