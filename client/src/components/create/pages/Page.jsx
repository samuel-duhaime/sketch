import styled from "styled-components";
import { Stage, Layer } from "react-konva";
import { COLORS } from "../../../helpers/constants/constants";
import PageActions from "./PageActions";
import Text from "../elements/Text";
import Rectangle from "../elements/Rectangle";
import Image from "../elements/Image";

const Page = ({ page, selectedElement, setSelectedElement, isViewPage = false }) => {
  // Deselected an element when clicking outsite but in the Stage
  const handleDeselectedElement = (ev) => {
    if (ev.target === ev.target.getStage()) {
      setSelectedElement(null);
    }
  };

  return (
    <>
      {/* Don't show on View page */}
      {!isViewPage === <PageActions page={page} />}

      <PageContainer
        width={page?.width}
        height={page?.height}
        backgroundColor={page?.backgroundColor}
      >
        <Stage
          width={page?.width}
          height={page?.height}
          onMouseDown={handleDeselectedElement}
          onTouchStart={handleDeselectedElement}
        >
          <Layer>
            {/* Elements */}
            {page?.elements.map((element) => {
              if (element?.type === "text") {
                /* Text */
                return (
                  <Text
                    key={element._id}
                    element={element}
                    isSelected={element._id === selectedElement}
                    setSelectedElement={setSelectedElement}
                    draggable={isViewPage ? false : true}
                  />
                );
              } else if (element?.type === "rectangle") {
                /* Rectangle */
                return (
                  <Rectangle
                    key={element._id}
                    element={element}
                    isSelected={element._id === selectedElement}
                    setSelectedElement={setSelectedElement}
                    draggable={isViewPage ? false : true}
                  />
                );
              } else if (element?.type === "image") {
                /* Images */
                return (
                  <Image
                    key={element._id}
                    element={element}
                    isSelected={element._id === selectedElement}
                    setSelectedElement={setSelectedElement}
                    draggable={isViewPage ? false : true}
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