import VerticalLine from "../../global/lines/VerticalLine";
import Layers from "../../global/button/Layers";
import DuplicateElement from "../../global/button/DuplicateElement";
import DeleteElement from "../../global/button/DeleteElement";

// Image actions
const ImageActions = () => {
  return (
    <>
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

export default ImageActions;
