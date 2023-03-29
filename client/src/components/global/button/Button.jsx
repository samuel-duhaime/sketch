import styled from "styled-components";
import { COLORS } from "../../../helpers/constants/constants";

const Button = ({ children, className, type = "button", size, color = "primary", onClick }) => {
  return (
    <ButtonComponent
      type={type}
      className={className}
      onClick={onClick}
      size={size} // "big"
      color={color} // "primary" || "white"
    >
      {children}
    </ButtonComponent>
  );
};

const ButtonComponent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  height: 40px;
  padding: 0 20px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;

  // Change width with size
  ${({ size }) => size === "big" && "width: 100%;"}

  // Change with color
   ${({ color }) =>
    color === "primary"
      ? `background-color: ${COLORS.primary};color: white;`
      : color === "white"
      ? `background-color: white; color: black;`
      : ""}
   
   &:is(:hover, :focus-visible) {
    opacity: 0.8;
  }
`;

export default Button;
