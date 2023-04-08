import ButtonIcon from "../../global/button/ButtonIcon";
import FontAwesomeIcon from "../../global/library/FontAwesomeIcon";
import VerticalLine from "../../global/lines/VerticalLine";
import ColorInput from "../../global/input/ColorInput";
import Layers from "../../global/button/Layers";

// Shape actions
const ShapeActions = () => {
  return (
    <>
      {/* Shapes */}
      <ButtonIcon>
        <FontAwesomeIcon icon="faShapes" />
        <div>Shapes</div>
      </ButtonIcon>

      <VerticalLine />

      {/* Background color */}
      <ColorInput keyName="backgroundColor" />

      <VerticalLine />

      {/* Layers */}
      <Layers />
    </>
  );
};

export default ShapeActions;
