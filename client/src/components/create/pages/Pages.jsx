import styled from "styled-components";
import { COLORS, SIZE } from "../../../helpers/constants/constants";
import Page from "./Page";
import Loading from "../../global/loading/Loading";

const Pages = ({ sketch, sketchId }) => {
  const pagesKeyData = Object.keys(sketch).filter((keyName) => keyName.startsWith("page")); // Find all the pages key

  return (
    <PagesContainer>
      {/* Pages */}
      {sketch._id === sketchId && pagesKeyData ? (
        pagesKeyData.map((pageKey) => {
          return (
            <Page
              key={sketch?.[pageKey].page}
              page={sketch?.[pageKey]}
              isViewPage={false}
            />
          );
        })
      ) : (
        <Loading />
      )}
    </PagesContainer>
  );
};

const PagesContainer = styled.div`
  position: sticky;
  left: calc(${SIZE.sectionsWidth} + ${SIZE.sectionActionsWidth});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: calc(100% - ${SIZE.sectionsWidth} - ${SIZE.sectionActionsWidth});
  min-height: calc(100vh - ${SIZE.topMenuHeight} - ${SIZE.elementActionsHeight});
  padding: 20px 10px;
  background-color: ${COLORS.gray};
  margin-top: 50px; // Need this for good setup
`;

export default Pages;
