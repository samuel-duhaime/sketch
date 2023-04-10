import { useContext } from "react";
import styled from "styled-components";
import { Stage, Layer, Rect } from "react-konva";
import { COLORS } from "../../../helpers/constants/constants";
import { SketchContext } from "../../global/context/SketchContext";
import PageActions from "./PageButtons";
import Element from "../elements/Element";

// Page Layer
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
            {/* Background rectangle for Page and Download */}
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
              return (
                // Element
                !element.isDelete && (
                  <Element
                    key={element._id}
                    element={element}
                    pageId={page._id}
                    isSelected={element._id === selectedElementId}
                    draggable={isViewPage ? false : true}
                  />
                )
              );
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
