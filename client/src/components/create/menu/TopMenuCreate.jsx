import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS, SIZE } from "../../../helpers/constants/constants";
import { SketchContext } from "../../global/context/SketchContext";
import FontAwesomeIcon from "../../global/library/FontAwesomeIcon";
import Button from "../../global/button/Button";
import Tippy from "../../global/library/Tippy";
import ShareTippySection from "../../global/tippySection/ShareTippySection";

const TopMenuCreate = () => {
  // Sketch Context
  const {
    sketch,
    actions: { saveAction, patchSketchAction },
  } = useContext(SketchContext);

  return (
    <TopMenuNav>
      {/* Left TopMenu */}
      <TopMenuActions>
        <CreateLink to="/">
          <Action>
            <FontAwesomeIcon icon="faAngleLeft" />
            Home
          </Action>
        </CreateLink>
        <Action onClick={saveAction}>Save</Action>
        <Action>
          <FontAwesomeIcon icon="faRotateLeft" />
        </Action>
        <Action>
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
        <Action>
          <FontAwesomeIcon icon="faCircleDown" />
        </Action>

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
  font-weight: 700;
  z-index: 2;
`;

const TopMenuActions = styled.div`
  display: flex;
`;

const Action = styled.div`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: ${COLORS.gray};
  }
`;

const CreateLink = styled(Link)`
  text-decoration: none;
  color: black;

  div {
    display: flex;
    gap: 8px;
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

const ShareButton = styled(Button)`
  margin-left: 10px;
`;

export default TopMenuCreate;
