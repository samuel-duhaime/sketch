import VerticalLine from "../../global/lines/VerticalLine";
import ColorInput from "../../global/input/ColorInput";
import Layers from "../../global/button/Layers";
import DuplicateElement from "../../global/button/DuplicateElement";
import DeleteElement from "../../global/button/DeleteElement";

// Shape actions
const ShapeActions = () => {
  return (
    <>
      {/* Background color */}
      <ColorInput keyName="backgroundColor" />

      <VerticalLine />

      {/* Layers */}
      <Layers />

      <VerticalLine />

      {/* Duplicate */}
      <DuplicateElement />

      {/* Delete */}
      <DeleteElement />
    </>
  );
};

export default ShapeActions;
