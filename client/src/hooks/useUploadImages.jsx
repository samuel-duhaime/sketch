import { useState, useEffect } from "react";
import { fetchApi } from "../helpers/fetch/fetchApi";

// Custom hook to getUploadImages
const useUploadImages = () => {
   const [images, setImages] = useState(null);
   const [isRefetch, setIsRefetch] = useState(null);

   // Usefull to refetch data
   const refetch = () => {
      if (isRefetch === null) {
         setIsRefetch(true);
      } else {
         setIsRefetch(!isRefetch);
      }
   };

   // Fetch the getUploadImages. Refetch when needed.
   useEffect(() => {
      fetchApi({ apiUrl: "/upload/images", setData: setImages });
   }, [isRefetch]);

   return { images, setImages, refetch };
};

export default useUploadImages;
