import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import handleCreateSketch from "../../helpers/handlers/handleCreateSketch";
import { COLORS, FONTS, SIZE } from "../../helpers/constants/constants";
import Button from "../global/button/Button";
import Tippy from "../global/library/Tippy";

const TopMenuHome = ({ setSketchId }) => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <TopMenuNav>
      <TopMenuContainer>
        <LogoLink to="/">
          <div>
            <Logo
              alt="Sketch logo"
              src="/assets/logo/logo-menu-minify.png"
            />
          </div>
          <Name>SKETCH</Name>
        </LogoLink>

        {/* Button and picture */}
        {isAuthenticated ? (
          <Actions>
            <Button onClick={() => handleCreateSketch({ setSketchId })}>Create</Button>
            <Tippy
              content={
                <DropDownButton onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Sign out
                </DropDownButton>
              }
            >
              <Image
                src={user.picture}
                alt={user.name}
              />
            </Tippy>
          </Actions>
        ) : (
          <div>
            <Button onClick={() => loginWithRedirect()}>Sign up</Button>
          </div>
        )}
      </TopMenuContainer>
    </TopMenuNav>
  );
};

const TopMenuNav = styled.nav`
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: ${COLORS.boxShadow};
  width: 100%;
`;

const TopMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  height: ${SIZE.topMenuHeight};
  max-width: 1240px;
  padding: 0 20px;
  margin: 0 auto;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: black;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

const Name = styled.div`
  font-size: 30px;
  font-family: ${FONTS.firstFontFamily};
  font-weight: 700;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

const DropDownButton = styled.button`
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: white;
  font-size: 18px;
  font-family: ${FONTS.secondFontFamily};
  text-align: left;
  cursor: pointer;

  &:is(:hover, :focus-visible) {
    text-decoration: underline;
  }
`;

export default TopMenuHome;
