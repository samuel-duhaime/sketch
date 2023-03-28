import styled from "styled-components";
import { COLORS, SIZE } from "../../../helpers/contants/constants";
import Page from "../pages/Page";

const Sketch = ({ sketchs, selectedElement, setSelectedElement }) => {
   const pagesKeyData = Object.keys(sketchs).filter((keyName) => keyName.startsWith("page")); // Find all the pages key

   return (
      <SketchContainer>
         {/* Return all pages */}
         {pagesKeyData.map((pageKey) => {
            return (
               <Page
                  key={sketchs?.[pageKey].page}
                  page={sketchs?.[pageKey]}
                  selectedElement={selectedElement}
                  setSelectedElement={setSelectedElement}
               />
            );
         })}
      </SketchContainer>
   );
};

const SketchContainer = styled.div`
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

export default Sketch;
