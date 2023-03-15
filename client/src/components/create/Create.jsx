import { useState } from "react";
import styled from "styled-components";
import { SIZE } from "../../helpers/contants/constants";
import TopMenuCreate from "./menu/TopMenuCreate";
import Sections from "./sections/Sections";
import SectionActions from "./sections/SectionActions";
import ElementActions from "./sections/ElementActions";
import Document from "./document/Document";

const Create = () => {
   const [section, setSection] = useState("text");

   return (
      <>
         {/* Top menu */}
         <TopMenuCreate />

         <MainLayout>
            {/* Sections */}
            <Sections
               section={section}
               setSection={setSection}
            />
            <SectionActions section={section} />

            <ContentLayout>
               {/* Elements actions */}
               <ElementActions />

               {/* Document */}
               <Document />
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
