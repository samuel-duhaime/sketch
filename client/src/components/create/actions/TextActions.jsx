import styled from "styled-components";
import { COLORS } from "../../../helpers/constants/constants";
import FontSizeInput from "../../global/input/FontSizeInput";
import ColorInput from "../../global/input/ColorInput";
import ButtonIcon from "../../global/button/ButtonIcon";
import FontAwesomeIcon from "../../global/library/FontAwesomeIcon";
import SelectOptions from "../../global/input/SelectOptions";

const TextActions = () => {
  return (
    <>
      <SelectOptions />

      {/* Font Size */}
      <FontSizeInput />

      {/* Color */}
      <ColorInput />

      {/* Bold */}
      <ButtonIcon>
        <Bold>B</Bold>
      </ButtonIcon>

      {/* Italic */}
      <ButtonIcon>
        <Italic>I</Italic>
      </ButtonIcon>

      {/* Underline */}
      <ButtonIcon>
        <Underline>U</Underline>
      </ButtonIcon>

      {/* UpperCase */}
      <ButtonIcon>
        <div>Aa</div>
      </ButtonIcon>

      <VerticalLine />

      {/* Align */}
      <ButtonIcon>
        <FontAwesomeIcon icon="faAlignCenter" />
      </ButtonIcon>

      <VerticalLine />

      {/* Layers */}
      <ButtonIcon>
        <FontAwesomeIcon icon="faLayerGroup" />
        <div>Layers</div>
      </ButtonIcon>
    </>
  );
};

const Bold = styled.span`
  font-weight: 700;
`;

const Italic = styled.span`
  font-style: italic;
`;

const Underline = styled.span`
  text-decoration: underline;
`;

const VerticalLine = styled.div`
  height: 25px;
  width: 1px;
  background-color: ${COLORS.darkGray};
`;

export default TextActions;
