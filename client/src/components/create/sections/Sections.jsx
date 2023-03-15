import styled from "styled-components";
import FontAwesomeIcon from "../../global/library/FontAwesomeIcon";
import { COLORS } from "../../../helpers/contants/constants";

const Sections = ({ section, setSection }) => {
   const sections = [
      { id: 0, text: "Text", icon: "faFont" },
      { id: 1, text: "Shapes", icon: "faShapes" },
      { id: 2, text: "Photos", icon: "faImage" },
      { id: 3, text: "Uploads", icon: "faCloudArrowUp" },
   ];

   const handleClick = (ev, sectionName) => {
      setSection(sectionName);
   };

   return (
      <SectionsSection>
         {sections.map((sectionObject) => {
            const sectionName = sectionObject.text.toLowerCase();

            return (
               <Section
                  key={sectionObject.id}
                  id={sectionObject.id}
                  onClick={(ev) => handleClick(ev, sectionName)}
                  active={section === sectionName ? true : false}
               >
                  <FontAwesomeIcon icon={sectionObject.icon} />
                  <div>{sectionObject.text}</div>
               </Section>
            );
         })}
      </SectionsSection>
   );
};

const SectionsSection = styled.section`
   display: flex;
   flex-direction: column;
   width: 70px;
   background-color: ${COLORS.darkBlack};
   color: white;
`;

const Section = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 3px;
   padding: 20px 0;
   cursor: pointer;
   color: white;
   font-size: 13px;

   svg {
      font-size: 20px;
   }

   // If active
   ${({ active }) => active && `background-color:  ${COLORS.lightBlack};`}

   &:hover {
      background-color: ${COLORS.lightBlack};
   }
`;

export default Sections;
