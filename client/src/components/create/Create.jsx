import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { SIZE } from "../../helpers/constants/constants";
import { SketchContext } from "../global/context/SketchContext";
import TopMenuCreate from "./menu/TopMenuCreate";
import Sections from "./sections/Sections";
import SectionActions from "./actions/SectionActions";
import ElementActions from "./actions/ElementActions";
import Pages from "./pages/Pages";
import Loading from "../global/loading/Loading";

// Create page
const Create = () => {
  const { sketchId } = useParams(); // Take the sketchId params
  
  // Sketch Context
  const {
    sketch,
    actions: { fetchSketchAction },
  } = useContext(SketchContext);

  // Fetch Sketch inside SketchContext
  useEffect(() => {
    fetchSketchAction({ sketchId });
  }, [sketchId]);

  return (
    <>
      {/* Top menu */}
      <TopMenuCreate />

      <MainLayout>
        {/* Sections */}
        <Sections />

        {/* Sections actions */}
        <SectionActions />

        <ContentLayout>
          {/* Elements actions */}
          <ElementActions />

          {/* Pages container */}
          {sketch ? <Pages sketch={sketch} /> : <Loading />}
        </ContentLayout>
      </MainLayout>
    </>
  );
};

const MainLayout = styled.main`
  display: flex;
  min-height: calc(100vh - ${SIZE.topMenuHeight});
`;

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default Create;
