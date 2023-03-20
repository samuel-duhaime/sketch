import styled from "styled-components";
import { COLORS, SIZE } from "../../../helpers/contants/constants";
import Page from "./Page";
import testDocument from "../../../data/testDocument.json";

const Document = () => {
   return (
      <DocumentContainer>
         {testDocument.pages.map((page) => {
            return (
               <Page
                  page={page}
                  key={page.page}
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
   padding: 10px;
   background-color: ${COLORS.gray};
`;

export default Document;
