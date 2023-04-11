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
          <H1>Bring your lessons to life.</H1>

          <TextContainer>
            <div>Easily create visual teaching materials to share.</div>

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

          {/* Demon presentation */}
          <DemoPresentation>
            <ImagesContainer>
              {/* Poster */}
              <PosterImage
                alt="Class rules poster"
                src="/assets/images/class-rules-poster.png"
              />
              {/* Schedule */}
              <ScheduleImage
                alt="Class schedule"
                src="/assets/images/class-schedule.png"
              />
            </ImagesContainer>

            {/* Video demonstration */}
            <Video
              src="/assets/videos/demo-sketch.mp4"
              title="Demonstration to create a Sketch"
              type="video/mp4"
              preload="auto"
              autoPlay
              muted
              loop
              playsInline
            />

            <ImagesContainer>
              <MeetImage
                alt="Meet your teacher"
                src="/assets/images/meet-the-teacher.png"
              />
              <GameImage
                alt="Activity - This or that"
                src="/assets/images/this-or-that.png"
              />
            </ImagesContainer>
          </DemoPresentation>
        </HomeSection>

        {/* Recent sketchs */}
        {isAuthenticated && <SketchsListing />}
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
  gap: 40px;
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
  max-width: 320px;
  text-align: center;
  font-size: 18px;
`;

const DemoPresentation = styled.div`
  display: flex;
  gap: 40px;
`;

const ImagesContainer = styled.div`
  position: relative;
  width: 280px;
`;

const PosterImage = styled.img`
  position: absolute;
  right: 0;
  width: 130px;
  border-radius: 10px;
  transform: rotate(10deg);
`;

const ScheduleImage = styled.img`
  position: absolute;
  bottom: 0;
  width: 200px;
  border-radius: 10px;
  transform: rotate(-5deg);
`;

const Video = styled.video`
  max-width: 600px;
`;

const MeetImage = styled.img`
  position: absolute;
  left: 0;
  width: 200px;
  border-radius: 10px;
  transform: rotate(-10deg);
`;

const GameImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 200px;
  border-radius: 10px;
  transform: rotate(10deg);
`;

export default Home;
