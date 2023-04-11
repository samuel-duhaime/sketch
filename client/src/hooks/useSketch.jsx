import { useEffect } from "react";
import { useParams } from "react-router-dom";

// Custom hook to getSketch
const useSketch = ({ fetchSketchAction }) => {
  const { sketchId } = useParams(); // Take the sketchId params

  // Usefull to refetch data
  useEffect(() => {
    const controller = new AbortController(); // Allow you to abort the fetch
    const signal = controller.signal; // Return the abort signal object

    fetchSketchAction({ sketchId, signal }); // Fetch inside SketchContext

    // Cancel the request before component unmounts
    return () => {
      controller.abort();
    };
  }, [sketchId]);

  return { sketchId };
};

export default useSketch;
