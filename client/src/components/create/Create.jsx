import { useState } from "react";
import styled from "styled-components";
import testDocument from "../../data/testDocument.json";
import { SIZE } from "../../helpers/contants/constants";
import TopMenuCreate from "./menu/TopMenuCreate";
import Sections from "./sections/Sections";
import SectionActions from "./actions/SectionActions";
import ElementActions from "./actions/ElementActions";
import Document from "./document/Document";

const Create = () => {
   const [selectedSection, setSelectedSection] = useState("text");
   const [selectedElement, setSelectedElement] = useState(null);

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

               {/* Document */}
               <Document
                  document={testDocument}
                  selectedElement={selectedElement}
                  setSelectedElement={setSelectedElement}
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
