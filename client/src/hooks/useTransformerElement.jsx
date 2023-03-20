import { useState, useEffect, useRef } from "react";

// Manually attach the element to the transformer
const useTransformerElement = ({ element, isSelected }) => {
   const [object, setObject] = useState({ ...element, isDragging: false });
   const elementRef = useRef(); // Ref to the element
   const transformerRef = useRef(); // Ref to the transformer

   // Manually attach the element to the transformer
   useEffect(() => {
      if (isSelected) {
         transformerRef.current.nodes([elementRef.current]);
         transformerRef.current.getLayer().batchDraw();
      }
   }, [isSelected]);

   return { object, setObject, elementRef, transformerRef };
};

export default useTransformerElement;
