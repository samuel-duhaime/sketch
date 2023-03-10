import styled from "styled-components";
import { COLORS } from "../../../helpers/contants/constants";

const Button = ({ children, className, type = "button", onClick }) => {
   return (
      <ButtonComponent
         type={type}
         className={className}
         onClick={onClick}
      >
         {children}
      </ButtonComponent>
   );
};

const ButtonComponent = styled.button`
   background-color: ${COLORS.primary};
   color: white;
   border: none;
   height: 40px;
   padding: 0 20px;
   border-radius: 10px;
   font-size: 20px;
   font-weight: 700;
   cursor: pointer;

   &:is(:hover, :focus) {
      opacity: 0.8;
   }
`;

export default Button;
