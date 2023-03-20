import styled from "styled-components";
import { COLORS } from "../../../helpers/contants/constants";

const ColorInput = () => {
   return <ColorInputElement type="color" />;
};

const ColorInputElement = styled.input`
   border: none;
   width: 32px;
   height: 32px;
   border-radius: 5px;
   background-color: transparent;
   cursor: pointer;

   &:is(:hover, :focus-visible) {
      background-color: ${COLORS.darkGray};
   }
`;

export default ColorInput;
