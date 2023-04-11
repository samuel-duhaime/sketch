import { Link } from "react-router-dom";
import styled from "styled-components";
import SwitchInput from "../input/SwitchInput";
import Button from "../button/Button";
import { alertSuccess } from "../library/Alert";

// Share Tippy library section
const ShareTippySection = ({ isOn, onChange, sketchId, isCreatePage = false }) => {
  return (
    <ShareSection>
      {/* Share input */}
      {isCreatePage && (
        <SwitchDiv>
          <div>Share witch colleagues and students.</div>
          <SwitchInput
            name="isShared"
            isOn={isOn}
            onChange={onChange}
          />
        </SwitchDiv>
      )}

      {/* Copy */}
      <Button
        size="big"
        onClick={() => {
          navigator.clipboard.writeText(`http://localhost:3000/view/${sketchId}`); // Copy to clipboard
          alertSuccess({ message: "Link copied" });
        }}
      >
        Copy share link
      </Button>

      {/* View button */}
      {isCreatePage && (
        <LinkNoDecoration to={"/view/" + sketchId}>
          <Button
            size="big"
            color="gray"
          >
            View
          </Button>
        </LinkNoDecoration>
      )}
    </ShareSection>
  );
};

const ShareSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
`;

const SwitchDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 400;
`;

const LinkNoDecoration = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default ShareTippySection;
