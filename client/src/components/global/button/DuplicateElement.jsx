import { useContext } from "react";
import { SketchContext } from "../context/SketchContext";
import ButtonIcon from "../../global/button/ButtonIcon";
import FontAwesomeIcon from "../../global/library/FontAwesomeIcon";
import { alertSuccess } from "../library/Alert";

// Duplicate element button
const DuplicateElement = () => {
  // Sketch Context
  const {
    selectedElement,
    actions: { postElementAction },
  } = useContext(SketchContext);

  return (
    <ButtonIcon
      onClick={() => {
        postElementAction({ newData: { ...selectedElement, x: selectedElement.x + 20, y: selectedElement.y + 20 } });
        alertSuccess({ message: "Element duplicated" });
      }}
    >
      <FontAwesomeIcon icon="faCopy" />
    </ButtonIcon>
  );
};

export default DuplicateElement;
