import { useEffect, useState } from "react";
import styled from "styled-components";
import useSketch from "../../hooks/useSketch";
import Page from "../create/pages/Page";
import BotMenuView from "./BotMenuView";
import Loading from "../global/Loading/Loading";
import FontAwesomeIcon from "../global/library/FontAwesomeIcon";

// View page
const View = () => {
  const { sketch } = useSketch();
  const [pagesKeyData, setPagesKeyData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  // Handle back page
  const handleBackPage = () => {
    if (pagesKeyData && pageNumber > 0) {
      // Cant be less than 0
      setPageNumber((number) => {
        return number - 1;
      });
    }
  };

  // Handle next page
  const handleNextPage = () => {
    if (pagesKeyData && pageNumber < pagesKeyData.length - 1) {
      // Cant be more than the number of pages
      setPageNumber((number) => {
        return number + 1;
      });
    }
  };

  useEffect(() => {
    if (sketch) {
      setPagesKeyData(Object.keys(sketch).filter((keyName) => keyName.startsWith("page"))); // Set all the pages key
    }
  }, [sketch]);

  return (
    <ViewPageContainer>
      {sketch && pagesKeyData ? (
        <>
          {/* Page */}
          <Page
            page={sketch && pagesKeyData && sketch[pagesKeyData[pageNumber]]}
            // page={sketch?.page1}
            isViewPage={true}
          />

          {/* Back page */}
          {pageNumber > 0 && (
            <LeftArrow onClick={handleBackPage}>
              <FontAwesomeIcon icon="faChevronLeft" />
            </LeftArrow>
          )}

          {/* Next page */}
          {pageNumber < pagesKeyData.length - 1 && (
            <RightArrow onClick={handleNextPage}>
              <FontAwesomeIcon icon="faChevronRight" />
            </RightArrow>
          )}

          {/* Bot menu */}
          <BotMenuView />
        </>
      ) : (
        <Loading theme="dark" />
      )}
      ;
    </ViewPageContainer>
  );
};

const ViewPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: black;
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
