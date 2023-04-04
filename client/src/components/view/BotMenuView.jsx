import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SketchContext } from "../global/context/SketchContext";
import FontAwesomeIcon from "../global/library/FontAwesomeIcon";
import Tippy from "../global/library/Tippy";
import ShareTippySection from "../global/tippySection/ShareTippySection";

const BotMenuView = ({ sketchId }) => {
  const { handleDownload } = useContext(SketchContext); // Sketch Context

  return (
    <BotMenuSection>
      <SideDiv>
        {/* Download */}
        <Tippy
          content={<div>Download</div>}
          interactive={false}
        >
          <Icon onClick={handleDownload}>
            <FontAwesomeIcon icon="faCircleDown" />
          </Icon>
        </Tippy>

        {/* Edit */}
        <Tippy
          content={<div>Edit</div>}
          interactive={false}
        >
          <LinkNoDecoration to={"/create/" + sketchId}>
            <Icon>
              <FontAwesomeIcon icon="faPenToSquare" />
            </Icon>
          </LinkNoDecoration>
        </Tippy>

        {/* Share */}
        <Tippy content={<ShareTippySection sketchId={sketchId} />}>
          <Icon>
            <FontAwesomeIcon icon="faArrowUpFromBracket" />
          </Icon>
        </Tippy>
      </SideDiv>

      {/* Logo */}
      <Tippy
        content={<div>Home</div>}
        interactive={false}
      >
        <LinkNoDecoration to="/">
          <SideDiv>
            <LogoImg
              src="/assets/logo/logo-light.png"
              alt="Logo Sketch"
            />
            <Title>SKETCH</Title>
          </SideDiv>
        </LinkNoDecoration>
      </Tippy>
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
