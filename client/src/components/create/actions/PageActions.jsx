import ColorInput from "../../global/input/ColorInput";
import Layers from "../../global/button/Layers";
import VerticalLine from "../../global/lines/VerticalLine";

// Page actions
const PageActions = () => {
  return (
    <>
      {/* Background color */}
      <ColorInput keyName="backgroundColor" selectedType="page" />

      <VerticalLine />

      {/* Layers */}
      <Layers />
    </>
  );
};

export default PageActions;
