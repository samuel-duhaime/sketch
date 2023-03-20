import styled from "styled-components";
import { COLORS, SIZE } from "../../../helpers/contants/constants";
import Page from "./Page";

const Document = ({ document, selectedElement, setSelectedElement }) => {
   return (
      <DocumentContainer>
         {document.pages.map((page) => {
            return (
               <Page
                  key={page.page}
                  page={page}
                  selectedElement={selectedElement}
                  setSelectedElement={setSelectedElement}
               />
            );
         })}
      </DocumentContainer>
   );
};

const DocumentContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 10px;
   height: 100%;
   min-height: calc(100vh - ${SIZE.topMenuHeight} - ${SIZE.elementActionsHeight});
   padding: 20px 10px;
   background-color: ${COLORS.gray};
`;

export default Document;
