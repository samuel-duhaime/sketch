import { useContext } from "react";
import styled from "styled-components";
import { COLORS } from "../../../helpers/constants/constants";
import { SketchContext } from "../../global/context/SketchContext";
import TextActions from "./TextActions";

const ElementActions = () => {
  const { selectedElement } = useContext(SketchContext); // Sketch Context

  return (
    <SectionContainer>
      <TextActions />
      {JSON.stringify(selectedElement)}
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
