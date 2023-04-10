import { useContext } from "react";
import { SketchContext } from "../context/SketchContext";
import ButtonIcon from "../../global/button/ButtonIcon";
import FontAwesomeIcon from "../../global/library/FontAwesomeIcon";
import { alertSuccess } from "../library/Alert";

// Delete element button
const DeleteElement = () => {
  // Sketch Context
  const {
    actions: { patchElementAction },
  } = useContext(SketchContext);

  return (
    <ButtonIcon
      onClick={() => {
        patchElementAction({ newData: { isDelete: true } });
        alertSuccess({ message: "Element deleted" });
      }}
    >
      <FontAwesomeIcon icon="faTrashCan" />
    </ButtonIcon>
  );
};

export default DeleteElement;
