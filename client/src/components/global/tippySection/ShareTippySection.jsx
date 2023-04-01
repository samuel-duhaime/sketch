import { useState } from "react";
import styled from "styled-components";
import SwitchInput from "../input/SwitchInput";
import Button from "../button/Button";

const ShareTippySection = ({ isOn, onChange, sketchId, isCreatePage = false }) => {
  const [text, setText] = useState("Copy view link");

  return (
    <ShareSection>
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

      <Button
        size="big"
        onClick={() => {
          navigator.clipboard.writeText(`http://localhost:3000/view/${sketchId}`); // Copy to clipboard
          setText("Copied"); // Change button text
        }}
      >
        {text}
      </Button>
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

export default ShareTippySection;
