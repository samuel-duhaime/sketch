import { useState, useEffect } from "react";
import { fetchApi } from "../helpers/fetch/fetchApi";

// Custom hook to getSketchs
const useSketchs = () => {
  const [sketchs, setSketchs] = useState(null);
  const [isRefetch, setIsRefetch] = useState(null);

  // Usefull to refetch data
  const refetch = () => {
    if (isRefetch === null) {
      setIsRefetch(true);
    } else {
      setIsRefetch(!isRefetch);
    }
  };

  // Fetch the getSketchs. Refetch when needed.
  useEffect(() => {
    fetchApi({ apiUrl: "/sketchs", setData: setSketchs });
  }, [isRefetch]);

  return { sketchs, setSketchs, refetch };
};

export default useSketchs;
