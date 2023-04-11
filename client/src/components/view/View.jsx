import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Page from "../create/pages/Page";
import BotMenuView from "./BotMenuView";
import { SketchContext } from "../global/context/SketchContext";
import Loading from "../global/loading/Loading";
import FontAwesomeIcon from "../global/library/FontAwesomeIcon";

// View page
const View = () => {
  const { sketchId } = useParams(); // Take the sketchId params
  const [pageNumber, setPageNumber] = useState(0);

  // Sketch Context
  const {
    sketch,
    pagesKey,
    actions: { fetchSketchAction },
  } = useContext(SketchContext);

  // Fetch Sketch inside SketchContext
  useEffect(() => {
    fetchSketchAction({ sketchId });
  }, [sketchId]);

  // Handle back page
  const handleBackPage = () => {
    if (pagesKey && pageNumber > 0) {
      // Cant be less than 0
      setPageNumber((number) => {
        return number - 1;
      });
    }
  };

  // Handle next page
  const handleNextPage = () => {
    if (pagesKey && pageNumber < pagesKey.length - 1) {
      // Cant be more than the number of pages
      setPageNumber((number) => {
        return number + 1;
      });
    }
  };

  return (
    <Background>
      {sketch && pagesKey ? (
        <>
          <ViewPageContainer>
            {/* Page */}
            <Page
              page={sketch && pagesKey && sketch[pagesKey[pageNumber]]}
              isViewPage={true}
            />

            {/* Back page */}
            {pageNumber > 0 && (
              <LeftArrow onClick={handleBackPage}>
                <FontAwesomeIcon icon="faChevronLeft" />
              </LeftArrow>
            )}

            {/* Next page */}
            {pageNumber < pagesKey.length - 1 && (
              <RightArrow onClick={handleNextPage}>
                <FontAwesomeIcon icon="faChevronRight" />
              </RightArrow>
            )}
          </ViewPageContainer>

          {/* Bot menu */}
          <BotMenuView sketchId={sketchId} />
        </>
      ) : (
        <Loading theme="dark" />
      )}
    </Background>
  );
};

const Background = styled.div`
  min-height: 100vh;
  background-color: black;
`;

const ViewPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 60px);
`;

const Arrow = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: #1e1e1e;
  opacity: 0.8;
  color: white;
  border: none;
  cursor: pointer;

  svg {
    font-size: 30px;
  }

  &:is(:hover, :focus) {
    svg {
      font-size: 40px;
    }
  }
`;

const LeftArrow = styled(Arrow)`
  left: 40px;
`;

const RightArrow = styled(Arrow)`
  right: 40px; ;
`;

export default View;
