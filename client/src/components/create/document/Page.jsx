import styled from "styled-components";
import { Stage, Layer } from "react-konva";
import { COLORS } from "../../../helpers/contants/constants";
import PageActions from "./PageActions";
import Text from "../elements/Text";
import Rectangle from "../elements/Rectangle";
import Image from "../elements/Image";

const Page = ({ page }) => {
   return (
      <>
         <PageActions width={page.width} />
         <PageContainer
            width={page.width}
            height={page.height}
            backgroundColor={page.backgroundColor}
         >
            <Stage
               width={page.width}
               height={page.height}
            >
               <Layer>
                  {/* Elements */}
                  {page.elements.map((element) => {
                     if (element.type === "text") {
                        /* Text */
                        return (
                           <Text
                              element={element}
                              key={element.id}
                           />
                        );
                     } else if (element.type === "rectangle") {
                        /* Rectangle */
                        return (
                           <Rectangle
                              element={element}
                              key={element.id}
                           />
                        );
                     } else if (element.type === "image") {
                        /* Images */
                        return (
                           <Image
                              element={element}
                              key={element.id}
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
