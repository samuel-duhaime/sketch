import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../helpers/fetch/fetchApi";

// FIXME: Bug with 2 useEffect() when loading Create page
// Custom hook to getSketch
const useSketch = () => {
  const { sketchId } = useParams(); // Take the sketchId params
  const [sketch, setSketch] = useState(null);
  const [isRefetch, setIsRefetch] = useState(null);

  // Usefull to refetch data
  const refetch = () => {
    if (isRefetch === null) {
      setIsRefetch(true);
    } else {
      setIsRefetch(!isRefetch);
    }
  };

  // Fetch the getSketch. Refetch when needed.
  useEffect(() => {
    fetchApi({ apiUrl: "/sketch/" + sketchId, setData: setSketch });
  }, [isRefetch, sketchId]);

  return { sketch, setSketch, refetch };
};

export default useSketch;
