import { useContext } from "react";
import styled from "styled-components";
import { SketchContext } from "../../global/context/SketchContext";
import FontAwesomeIcon from "../../global/library/FontAwesomeIcon";
import { COLORS, SIZE } from "../../../helpers/constants/constants";

const Sections = () => {
  const { selectedSection, setSelectedSection } = useContext(SketchContext); // Sketch Context

  /* sections object */
  const sections = [
    { id: 0, text: "Templates", icon: "faTableCellsLarge" },
    { id: 1, text: "Text", icon: "faFont" },
    { id: 2, text: "Shapes", icon: "faShapes" },
    // { id: 3, text: "Photos", icon: "faImage" },
    { id: 4, text: "Uploads", icon: "faCloudArrowUp" },
    { id: 5, text: "Layers", icon: "faLayerGroup" },
  ];

  const handleClick = (ev, sectionName) => {
    setSelectedSection(sectionName);
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
            active={selectedSection === sectionName ? true : false}
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
  position: fixed;
  top: ${SIZE.topMenuHeight};
  left: 0;
  display: flex;
  flex-direction: column;
  width: ${SIZE.sectionsWidth};
  min-height: calc(100vh - ${SIZE.topMenuHeight});
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
