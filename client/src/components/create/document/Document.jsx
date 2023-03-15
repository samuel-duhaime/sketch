import styled from "styled-components";
import { Stage, Layer } from "react-konva";
import { COLORS, SIZE } from "../../../helpers/contants/constants";
import DocumentActions from "./DocumentActions";
import Text from "../elements/Text";
import Rectangle from "../elements/Rectangle";
import Image from "../elements/Image";

const Document = () => {
   return (
      <DocumentContainer>
         <DocumentActions />
         <WhiteDocument>
            <Stage
               width={550}
               height={550}
            >
               <Layer>
                  <Text />
                  <Rectangle />
                  <Image />
               </Layer>
            </Stage>
         </WhiteDocument>
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

const WhiteDocument = styled.section`
   background-color: white;
   height: 550px;
   width: 550px;
   box-shadow: ${COLORS.boxShadow};
`;

export default Document;
