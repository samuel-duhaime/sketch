import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import TopMenuHome from "./TopMenuHome";
import Button from "../global/button/Button";
import { SIZE } from "../../helpers/contants/constants";

const Home = () => {
   const { isAuthenticated, loginWithRedirect } = useAuth0();

   return (
      <>
         <TopMenuHome />

         <MainLayout>
            <HomeSection>
               <div>
                  <H1>What will you teach today?</H1>
               </div>

               <TextContainer>
                  <div>Sketch makes it easy to create teaching material to share with collegues and students.</div>

                  {/* Button */}
                  <FullDiv>
                     {isAuthenticated ? (
                        <NewLink to="/create/new">
                           <Button size="big">Create a document</Button>
                        </NewLink>
                     ) : (
                        <Button
                           size="big"
                           onClick={() => loginWithRedirect()}
                        >
                           Sign up for free
                        </Button>
                     )}
                  </FullDiv>
               </TextContainer>

               <Image
                  alt="App demonstration of Sketch"
                  src="assets/images/demoTest.png"
               />
            </HomeSection>
         </MainLayout>
      </>
   );
};

const MainLayout = styled.main`
   display: flex;
   flex-direction: column;
   align-items: center;
   min-height: calc(100vh - ${SIZE.topMenuHeight});
   max-width: 1240px;
   padding: 20px;
   margin: 0 auto;
`;

const HomeSection = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 100%;
   gap: 20px;
   padding: 10px 0;
   margin: auto;
`;

const H1 = styled.h1`
   margin: 0;
   font-size: 60px;
   text-align: center;
`;

const FullDiv = styled.div`
   width: 100%;
`;

const NewLink = styled(Link)`
   text-decoration: none;
`;

const TextContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 20px;
   max-width: 400px;
   text-align: center;
   font-size: 18px;
`;

const Image = styled.img`
   width: 100%;
`;

export default Home;
