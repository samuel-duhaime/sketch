import { fetchApi } from "../fetch/fetchApi";

// Create a new Sketch with a postSketch
const handleCreateSketch = ({ setSketchId }) => {
  fetchApi({ apiUrl: "/sketch", method: "POST", setData: setSketchId });
};

export default handleCreateSketch;
