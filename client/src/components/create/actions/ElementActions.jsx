import styled from "styled-components";
import { COLORS } from "../../../helpers/constants/constants";
import TextActions from "./TextActions";

const ElementActions = ({ selectedElement }) => {
  return (
    <SectionContainer>
      <TextActions />
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 50px;
  padding: 10px;
  box-shadow: ${COLORS.boxShadow};
  clip-path: inset(0 0 -3px 0); // Remove box-shadow except for bottom
`;

export default ElementActions;
