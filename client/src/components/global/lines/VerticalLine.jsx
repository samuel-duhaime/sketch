import styled from "styled-components";
import { COLORS } from "../../../helpers/constants/constants";

const VerticalLine = () => {
  return <VerticalLineDiv />;
};

const VerticalLineDiv = styled.div`
  height: 25px;
  width: 1px;
  background-color: ${COLORS.darkGray};
`;

export default VerticalLine;
