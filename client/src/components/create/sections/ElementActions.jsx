import styled from "styled-components";
import { COLORS } from "../../../helpers/contants/constants";

const ElementActions = () => {
   return <SectionContainer>ElementActions</SectionContainer>;
};

const SectionContainer = styled.section`
   display: flex;
   align-items: center;
   width: 100%;
   height: 50px;
   padding: 10px;
   box-shadow: ${COLORS.boxShadow};
   clip-path: inset(0 0 -3px 0); // Remove box-shadow except for bottom
`;

export default ElementActions;
