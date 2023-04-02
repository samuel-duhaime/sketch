import styled from "styled-components";
import { COLORS } from "../../../helpers/constants/constants";

const ButtonIcon = ({ children, isActive = false, onClick }) => {
  return <ButtonIconContainer isActive={isActive} onClick={onClick}>{children}</ButtonIconContainer>;
};

const ButtonIconContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 5px;
  min-width: 32px;
  min-height: 32px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.isActive ? COLORS.gray : "transparent"};
  cursor: pointer;

  &:is(:hover, :focus-visible) {
    background-color: ${COLORS.darkGray};
  }

  svg {
    font-size: 14px;
  }
`;

export default ButtonIcon;
