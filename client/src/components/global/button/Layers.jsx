import { useContext } from "react";
import { SketchContext } from "../context/SketchContext";
import ButtonIcon from "../../global/button/ButtonIcon";
import FontAwesomeIcon from "../../global/library/FontAwesomeIcon";

// Layers button
const Layers = () => {
  // Sketch Context
  const { setSelectedSection } = useContext(SketchContext);

  return (
    <ButtonIcon onClick={() => setSelectedSection("layers")}>
      <FontAwesomeIcon icon="faLayerGroup" />
      <div>Layers</div>
    </ButtonIcon>
  );
};

export default Layers;
