import styled from "styled-components";
import { COLORS, SIZE } from "../../../helpers/constants/constants";
import Page from "./Page";

const Pages = ({ sketch }) => {
  const pagesKeyData = Object.keys(sketch).filter((keyName) => keyName.startsWith("page")); // Find all the pages key

  return (
    <PagesContainer>
      {/* Pages */}
      {pagesKeyData.map((pageKey) => {
        return (
          <Page
            key={sketch?.[pageKey].page}
            page={sketch?.[pageKey]}
            isViewPage={false}
          />
        );
      })}
    </PagesContainer>
  );
};

const PagesContainer = styled.div`
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

export default Pages;
