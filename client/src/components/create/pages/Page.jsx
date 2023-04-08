import { useContext } from "react";
import styled from "styled-components";
import { Stage, Layer, Rect } from "react-konva";
import { COLORS } from "../../../helpers/constants/constants";
import { SketchContext } from "../../global/context/SketchContext";
import PageActions from "./PageButtons";
import Text from "../elements/Text";
import Rectangle from "../elements/Rectangle";
import Image from "../elements/Image";

// TODO: Change ref to other page ("page1" ,"page2", etc.)
const Page = ({ page, isViewPage }) => {
  const { stageRef, selectedElementId, setSelectedElementId, selectedPageId, setSelectedPageId } =
    useContext(SketchContext); // Sketch Context

  // Deselected an element when clicking outsite but in the Stage
  const handleDeselectedElement = (ev) => {
    if (ev.target === ev.target.getStage()) {
      setSelectedElementId(null);
    }
  };

  return (
    <>
      {/* Don't show on View page */}
      {!isViewPage && <PageActions page={page} />}

      <PageContainer
        width={page?.width}
        height={page?.height}
      >
        <Stage
          ref={page?._id === selectedPageId ? stageRef : null}
          width={page?.width}
          height={page?.height}
          onMouseDown={handleDeselectedElement}
          onTouchStart={handleDeselectedElement}
        >
          <Layer>
            {/* Background rectangle for Download */}
            <Rect
              x={0}
              y={0}
              width={page?.width}
              height={page?.height}
              fill={page?.backgroundColor}
              stroke={page?._id === selectedPageId && !selectedElementId ? COLORS.primary : null} // Border
              onClick={() => {
                setSelectedPageId(page._id);
                setSelectedElementId(null);
              }}
            />

            {/* Elements */}
            {page?.elements.map((element) => {
              if (element?.type === "text") {
                /* Text */
                return (
                  <Text
                    key={element._id}
                    element={element}
                    pageId={page._id}
                    isSelected={element._id === selectedElementId}
                    draggable={isViewPage ? false : true}
                  />
                );
              } else if (element?.type === "rectangle") {
                /* Rectangle */
                return (
                  <Rectangle
                    key={element._id}
                    element={element}
                    pageId={page._id}
                    isSelected={element._id === selectedElementId}
                    draggable={isViewPage ? false : true}
                  />
                );
              } else if (element?.type === "image") {
                /* Image */
                return (
                  <Image
                    key={element._id}
                    element={element}
                    pageId={page._id}
                    isSelected={element._id === selectedElementId}
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
  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width + "px"};
  box-shadow: ${COLORS.boxShadow};
`;

export default Page;
