import { useContext } from "react";
import styled from "styled-components";
import { SketchContext } from "../../global/context/SketchContext";
import ButtonIcon from "../../global/button/ButtonIcon";
import FontAwesomeIcon from "../../global/library/FontAwesomeIcon";
import { alertSuccess } from "../../global/library/Alert";

// Page buttons actions
const PageButtons = ({ page }) => {
  // Sketch Context
  const {
    pagesKey,
    actions: { patchPageAction },
  } = useContext(SketchContext);

  return (
    <PageButtonsContainer width={page.width}>
      {/* Page name */}
      <div>
        <StrongText>Page {page.page}</StrongText> -
        <InputName
          type="text"
          id="pageName"
          name="pageName"
          placeholder={page?.pageName}
          valueLength={page?.pageName?.length}
          onChange={(event) =>
            patchPageAction({
              pageId: page._id,
              pageAction: "modification",
              pageData: { pageName: event.target.value },
            })
          }
        />
      </div>

      <PageIcons>
        {/* Page move up */}
        <ButtonIcon
          disabled={page?.page === 1 ? true : false}
          onClick={() => {
            patchPageAction({ pageNumber: page.page, pageAction: "movePageUp" });
            alertSuccess({ message: "Page moved up" });
          }}
        >
          <FontAwesomeIcon icon="faAngleUp" />
        </ButtonIcon>

        {/* Page move down */}
        <ButtonIcon
          disabled={page?.page >= pagesKey.length ? true : false}
          onClick={() => {
            patchPageAction({ pageNumber: page.page, pageAction: "movePageDown" });
            alertSuccess({ message: "Page moved down" });
          }}
        >
          <FontAwesomeIcon icon="faAngleDown" />
        </ButtonIcon>

        {/* Page duplicate */}
        <ButtonIcon>
          <FontAwesomeIcon icon="faCopy" />
        </ButtonIcon>

        {/* Page delete */}
        <ButtonIcon
          disabled={pagesKey.length === 1 ? true : false}
          onClick={() => {
            patchPageAction({ pageId: page._id, pageAction: "delete" });
            alertSuccess({ message: "Page deleted" });
          }}
        >
          <FontAwesomeIcon icon="faTrashCan" />
        </ButtonIcon>

        {/* Page add */}
        <ButtonIcon
          onClick={() => {
            patchPageAction({ pageNumber: page.page, pageAction: "add" });
            alertSuccess({ message: "Page added" });
          }}
        >
          <FontAwesomeIcon icon="faFileCirclePlus" />
        </ButtonIcon>
      </PageIcons>
    </PageButtonsContainer>
  );
};

const PageButtonsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  width: ${({ width }) => width + "px"};
`;

const PageIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const StrongText = styled.span`
  font-weight: 700;
`;

const InputName = styled.input`
  padding: 10px;
  text-align: left;
  height: 30px;
  width: ${(props) =>
    props.valueLength ? `calc(${props.valueLength}ch + 3ch)` : "10ch"}; // Width with number of characters + 3
  border: none;
  border-radius: 5px;
  background-color: transparent;

  &:is(:hover, :focus) {
    border: 1px solid black;
  }

  &::placeholder {
    color: black;
  }
`;

export default PageButtons;
