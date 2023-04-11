import { useContext } from "react";
import styled from "styled-components";
import { SIZE } from "../../helpers/constants/constants";
import { SketchContext } from "../global/context/SketchContext";
import TopMenuCreate from "./menu/TopMenuCreate";
import Sections from "./sections/Sections";
import SectionActions from "./actions/SectionActions";
import ElementActions from "./actions/ElementActions";
import Pages from "./pages/Pages";
import useSketch from "../../hooks/useSketch";

// Create page
const Create = () => {
  const {
    sketch,
    actions: { fetchSketchAction },
  } = useContext(SketchContext);

  // Fetch Sketch inside SketchContext
  const { sketchId } = useSketch({ fetchSketchAction });

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
          <Pages
            sketch={sketch}
            sketchId={sketchId} // To verify the sketchId for loading
          />
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
