import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { COLORS, FONTS, SIZE } from "../../helpers/contants/constants";
import Button from "../global/button/Button";
import Tippy from "../global/library/Tippy";

const TopMenuHome = () => {
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
                  <NewLink to="/create/new">
                     <Button>Create</Button>
                  </NewLink>
                  <Tippy
                     content={
                        <DropDownButton onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                           Sign out
                        </DropDownButton>
                     }
                     trigger="click"
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

const NewLink = styled(Link)`
   text-decoration: none;
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

   &:is(:hover, :focus) {
      background-color: ${COLORS.gray};
   }
`;

export default TopMenuHome;
