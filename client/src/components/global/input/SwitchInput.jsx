import styled from "styled-components";
import { COLORS } from "../../../helpers/constants/constants";

// Switch checked boolean input
const SwitchInput = ({ name, isOn, onChange }) => {
  return (
    <SwitchDiv>
      <SwitchInputElement
        id={name}
        name={name}
        type="checkbox"
        checked={isOn}
        onChange={onChange}
      />
      <SwitchLabel
        isOn={isOn}
        htmlFor={name}
      >
        <SwitchBall isOn={isOn} />
      </SwitchLabel>
    </SwitchDiv>
  );
};

const SwitchDiv = styled.div`
  display: flex;
  margin: 2px 0;
`;

const SwitchInputElement = styled.input`
  height: 0;
  width: 0;
  visibility: hidden; // Hide the button
`;

const SwitchLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50px;
  height: 25px;
  border-radius: 100px;
  background-color: ${(props) => (props.isOn ? `${COLORS.green}` : `${COLORS.darkGray}`)};
  transition: background-color 0.2s;
  cursor: pointer;
`;

const SwitchBall = styled.span`
  content: "";
  position: absolute;
  top: 2.5px;
  left: ${(props) => (props.isOn ? "calc(100% - 22.5px)" : "2.5px")};
  width: 20px;
  height: 20px;
  border-radius: 45px;
  background: #fff;
  box-shadow: ${COLORS.boxShadow};
  -webkit-box-shadow: ${COLORS.boxShadow};
  -moz-box-shadow: ${COLORS.boxShadow};
  appearance: none;
  transition: all 0.2s;
`;

export default SwitchInput;
