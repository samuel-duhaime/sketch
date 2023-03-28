import styled from "styled-components";
import { Stage, Layer } from "react-konva";
import { COLORS } from "../../../helpers/contants/constants";
import PageActions from "./PageActions";
import Text from "../elements/Text";
import Rectangle from "../elements/Rectangle";
import Image from "../elements/Image";

const Page = ({ page, selectedElement, setSelectedElement }) => {
   // Deselected an element when clicking outsite but in the Stage
   const handleDeselectedElement = (ev) => {
      if (ev.target === ev.target.getStage()) {
         setSelectedElement(null);
      }
   };

   return (
      <>
         <PageActions page={page} />
         <PageContainer
            width={page.width}
            height={page.height}
            backgroundColor={page.backgroundColor}
         >
            <Stage
               width={page.width}
               height={page.height}
               onMouseDown={handleDeselectedElement}
               onTouchStart={handleDeselectedElement}
            >
               <Layer>
                  {/* Elements */}
                  {page.elements.map((element) => {
                     if (element.type === "text") {
                        /* Text */
                        return (
                           <Text
                              key={element.id}
                              element={element}
                              isSelected={element.id === selectedElement}
                              setSelectedElement={setSelectedElement}
                           />
                        );
                     } else if (element.type === "rectangle") {
                        /* Rectangle */
                        return (
                           <Rectangle
                              key={element.id}
                              element={element}
                              isSelected={element.id === selectedElement}
                              setSelectedElement={setSelectedElement}
                           />
                        );
                     } else if (element.type === "image") {
                        /* Images */
                        return (
                           <Image
                              key={element.id}
                              element={element}
                              isSelected={element.id === selectedElement}
                              setSelectedElement={setSelectedElement}
                           />
                        );
                     } else {
                        return null;
                     }
                  })}
               </Layer>
            </Stage>
         </PageContainer>
      </>
   );
};

const PageContainer = styled.section`
   background-color: ${({ backgroundColor }) => backgroundColor};
   height: ${({ height }) => height + "px"};
   width: ${({ width }) => width + "px"};
   box-shadow: ${COLORS.boxShadow};
`;

export default Page;
