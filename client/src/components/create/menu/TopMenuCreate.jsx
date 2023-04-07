import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS, SIZE } from "../../../helpers/constants/constants";
import { SketchContext } from "../../global/context/SketchContext";
import FontAwesomeIcon from "../../global/library/FontAwesomeIcon";
import Button from "../../global/button/Button";
import Tippy from "../../global/library/Tippy";
import ShareTippySection from "../../global/tippySection/ShareTippySection";
import { alertSuccess } from "../../global/library/Alert";

const TopMenuCreate = () => {
  // Sketch Context
  const {
    historyLength,
    historyNumber,
    sketch,
    handleDownload,
    handleUndo,
    handleRedo,
    actions: { saveAction, patchSketchAction },
  } = useContext(SketchContext);

  return (
    <TopMenuNav>
      {/* Left TopMenu */}
      <TopMenuActions>
        {/* Home */}
        <HomeLink to="/">
          <FontAwesomeIcon icon="faAngleLeft" />
          Home
        </HomeLink>

        {/* Save */}
        <Action
          onClick={() => {
            saveAction();
            alertSuccess({ message: "Sketch saved" });
          }}
        >
          Save
        </Action>

        {/* Undo */}
        <Action
          onClick={() => {
            handleUndo();
            alertSuccess({ message: "Undo save" });
          }}
          disabled={historyNumber <= 0 ? true : false}
        >
          <FontAwesomeIcon icon="faRotateLeft" />
        </Action>

        {/* Redo */}
        <Action
          onClick={() => {
            handleRedo();
            alertSuccess({ message: "Redo save" });
          }}
          disabled={historyNumber >= historyLength ? true : false}
        >
          <FontAwesomeIcon icon="faRotateRight" />
        </Action>
      </TopMenuActions>

      {/* Right TopMenu */}
      <TopMenuActions>
        {/* Input name */}
        <InputName
          type="text"
          id="sketchName"
          name="sketchName"
          placeholder={sketch?.sketchName}
          valueLength={sketch?.sketchName?.length}
          onChange={(event) => patchSketchAction({ newData: { sketchName: event.target.value } })}
        />

        {/* Download */}
        <Download
          onClick={() => {
            handleDownload();
            alertSuccess({ message: "Sketch downloaded" });
          }}
        >
          <FontAwesomeIcon icon="faCircleDown" />
        </Download>

        {/* Share */}
        <Tippy
          content={
            <ShareTippySection
              isOn={sketch?.isShared}
              onChange={() => patchSketchAction({ newData: { isShared: !sketch?.isShared } })}
              sketchId={sketch?._id}
              isCreatePage={true}
            />
          }
          trigger="click"
        >
          <ShareButton>
            <FontAwesomeIcon icon="faArrowUpFromBracket" />
            <div>Share</div>
          </ShareButton>
        </Tippy>
      </TopMenuActions>
    </TopMenuNav>
  );
};

const TopMenuNav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-shadow: ${COLORS.boxShadow};
  padding: 20px 10px;
  width: 100%;
  height: ${SIZE.topMenuHeight};
  z-index: 2;
`;

const TopMenuActions = styled.div`
  display: flex;
`;

const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: transparent;
  color: black;
  text-decoration: none;
  cursor: pointer;

  svg {
    font-size: 14px;
  }

  &:hover {
    background-color: ${COLORS.gray};
  }
`;

const Action = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;

  &:disabled {
    color: ${COLORS.darkGray};
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${COLORS.gray};
  }
`;

const InputName = styled.input`
  padding: 10px;
  text-align: right;
  height: 40px;
  width: ${(props) =>
    props.valueLength ? `calc(${props.valueLength}ch + 3ch)` : "10ch"}; // Width with number of characters + 3
  border: none;
  border-radius: 5px;

  &:is(:hover, :focus) {
    border: 1px solid black;
  }

  &::placeholder {
    color: black;
  }
`;

const Download = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: transparent;

  svg {
    font-size: 20px;
  }

  &:hover {
    background-color: ${COLORS.gray};
  }
`;

const ShareButton = styled(Button)`
  margin-left: 10px;
`;

export default TopMenuCreate;
