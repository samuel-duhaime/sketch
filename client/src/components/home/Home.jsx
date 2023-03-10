import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../global/button/Button";

const Home = () => {
   return (
      <HomeSection>
         <div>
            <H1>What will you teach today?</H1>
         </div>
         <TextContainer>
            <div>Sketch makes it easy to create teaching material to share with collegues and students.</div>
            <Link to="/signup">
               <Button>Sign up for free</Button>
            </Link>
         </TextContainer>
         <img
            alt="App demonstration of Sketch"
            src="assets/images/demoTest.png"
         />
      </HomeSection>
   );
};

const HomeSection = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 100%;
   gap: 20px;
   padding: 20px 0;
   margin: auto;
`;

const H1 = styled.h1`
   margin: 0;
   font-size: 60px;
   text-align: center;
`;

const TextContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 20px;
   max-width: 500px;
   text-align: center;
   font-size: 18px;
`;

export default Home;
