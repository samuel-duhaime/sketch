import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { SIZE } from "../../helpers/constants/constants";
import handleCreateSketch from "../../helpers/handlers/handleCreateSketch";
import TopMenuHome from "./TopMenuHome";
import Button from "../global/button/Button";
import SketchsListing from "./SketchsListing";

const Home = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [sketchId, setSketchId] = useState(null);
  const navigate = useNavigate(); // Navigate to a page

  // Navigate to create page when postSketch success
  if (sketchId) {
    navigate("/create/" + sketchId);
  }

  return (
    <>
      <TopMenuHome
        setSketchId={setSketchId}
        navigate={navigate}
      />

      <MainLayout>
        <HomeSection>
          <H1>What will you teach today?</H1>

          <TextContainer>
            <div>Sketch makes it easy to create teaching material to share with colleagues and students.</div>

            {/* Button */}
            <FullDiv>
              {isAuthenticated ? (
                <Button
                  size="big"
                  onClick={() => handleCreateSketch({ setSketchId })}
                >
                  Create a Sketch
                </Button>
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
            src="/assets/images/demoTest.png"
          />
        </HomeSection>

        {/* Recent sketchs */}
        <SketchsListing />
      </MainLayout>
    </>
  );
};

const MainLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1240px;
  margin: 0 auto;
`;

const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - ${SIZE.topMenuHeight});
  gap: 20px;
  padding: 20px 0;
`;

const H1 = styled.h1`
  margin: 0;
  font-size: 60px;
  text-align: center;
`;

const FullDiv = styled.div`
  width: 100%;
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
