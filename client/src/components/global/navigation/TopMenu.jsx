import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS, FONTS, SIZE } from "../../../helpers/contants/constants";
import Button from "../button/Button";

const TopMenu = () => {
   return (
      <TopMenuNav>
         <TopMenuContainer>
            <LogoLink to="/">
               <div>
                  <Logo
                     alt="Sketch logo"
                     src="assets/logo/logo-menu-minify.png"
                  />
               </div>
               <Name>SKETCH</Name>
            </LogoLink>
            <div>
               <Link to="/signup">
                  <Button>Sign up</Button>
               </Link>
            </div>
         </TopMenuContainer>
      </TopMenuNav>
   );
};

const TopMenuNav = styled.nav`
   box-shadow: ${COLORS.boxShadow};
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

export default TopMenu;
