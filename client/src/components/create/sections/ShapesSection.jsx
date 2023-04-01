import styled from "styled-components";
import { COLORS } from "../../../helpers/constants/constants";

const ShapesSection = () => {
  return (
    <PhapesListing>
      <ShapeDiv><CircleShape /></ShapeDiv>
      <ShapeDiv><CircleShape /></ShapeDiv>
      <ShapeDiv><CircleShape /></ShapeDiv>
      <ShapeDiv><CircleShape /></ShapeDiv>
      <ShapeDiv><CircleShape /></ShapeDiv>
      <ShapeDiv><CircleShape /></ShapeDiv>
    </PhapesListing>
  );
};

const PhapesListing = styled.section`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const ShapeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 97px;
  height: 97px;
  background-color: ${COLORS.darkGray};
  border-radius: 10px;
`;

const CircleShape = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: black;
`;

export default ShapesSection;
