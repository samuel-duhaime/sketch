import { useState } from "react";
import styled from "styled-components";
import useSketch from "../../hooks/useSketch";
import { SIZE } from "../../helpers/constants/constants";
import TopMenuCreate from "./menu/TopMenuCreate";
import Sections from "./sections/Sections";
import SectionActions from "./actions/SectionActions";
import ElementActions from "./actions/ElementActions";
import Pages from "./pages/Pages";
import Loading from "../global/Loading/Loading";

// Create page
const Create = () => {
  const [selectedSection, setSelectedSection] = useState("text");
  const [selectedElement, setSelectedElement] = useState(null);
  const { sketch } = useSketch();

  return (
    <>
      {/* Top menu */}
      <TopMenuCreate />

      <MainLayout>
        {/* Sections */}
        <Sections
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
        <SectionActions selectedSection={selectedSection} />

        <ContentLayout>
          {/* Elements actions */}
          <ElementActions selectedElement={selectedElement} />

          {/* Pages container */}
          {sketch ? (
            <Pages
              sketch={sketch}
              selectedElement={selectedElement}
              setSelectedElement={setSelectedElement}
            />
          ) : (
            <Loading />
          )}
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
