import { Link } from "react-router-dom";
import styled from "styled-components";
import FontAwesomeIcon from "../global/library/FontAwesomeIcon";

const BotMenuView = () => {
  return (
    <BotMenuSection>
      <SideDiv>
        {/* Download */}
        <Icon>
          <FontAwesomeIcon icon="faCircleDown" />
        </Icon>

        {/* Share */}
        <Icon>
          <FontAwesomeIcon icon="faArrowUpFromBracket" />
        </Icon>

        {/* Edit */}
        <Icon>
          <FontAwesomeIcon icon="faPenToSquare" />
        </Icon>
      </SideDiv>

      {/* Logo */}
      <LinkNoDecoration to="/">
        <SideDiv>
          <LogoImg
            src="/assets/logo/logo-light.png"
            alt="Logo Sketch"
          />
          <Title>SKETCH</Title>
        </SideDiv>
      </LinkNoDecoration>
    </BotMenuSection>
  );
};

const BotMenuSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
  color: white;
  background-color: #1e1e1e;
  opacity: 0.8;
`;

const SideDiv = styled.div`
  display: flex;
  gap: 16px;
`;

const Icon = styled.button`
  background-color: #1e1e1e;
  padding: 5px;
  border-radius: 10px;
  border: none;
  color: white;
  cursor: pointer;

  svg {
    font-size: 30px;
  }

  &:is(:focus, :hover) {
    scale: 1.25;
  }
`;

const LinkNoDecoration = styled(Link)`
  color: white;
  text-decoration: none;

  &:is(:hover, :focus-visible) {
    text-decoration: underline;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

const LogoImg = styled.img`
  margin-top: -3px;
  width: 30px;
  height: 30px;
`;

export default BotMenuView;
