import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../../helpers/constants/constants";
import FontAwesomeIcon from "../../global/library/FontAwesomeIcon";
import Button from "../../global/button/Button";

const TopMenuCreate = () => {
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
        <Action>File</Action>
        <Action>Save</Action>
        <Action>
          <FontAwesomeIcon icon="faRotateLeft" />
        </Action>
        <Action>
          <FontAwesomeIcon icon="faRotateRight" />
        </Action>
      </TopMenuActions>

      {/* Right TopMenu */}
      <TopMenuActions>
        <Action>Document name</Action>
        <Action>
          <FontAwesomeIcon icon="faCirclePlus" />
        </Action>
        <Action>
          <FontAwesomeIcon icon="faCircleDown" />
        </Action>
        <MarginButton>
          <FontAwesomeIcon icon="faArrowUpFromBracket" />
          <div>Share</div>
        </MarginButton>
      </TopMenuActions>
    </TopMenuNav>
  );
};

const TopMenuNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${COLORS.boxShadow};
  padding: 20px 10px;
  width: 100%;
  height: 60px;
  font-weight: 700;
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

const MarginButton = styled(Button)`
  margin-left: 10px;
`;

export default TopMenuCreate;
