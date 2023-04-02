import { useState, useEffect, useRef } from "react";

// Manually attach the element to the transformer
const useTransformerElement = ({ isSelected }) => {
   const [isDragging, setIsDragging] = useState(false); // Element is dragging
   const elementRef = useRef(); // Ref to the element
   const transformerRef = useRef(); // Ref to the transformer

   // Manually attach the element to the transformer
   useEffect(() => {
      if (isSelected) {
         transformerRef.current.nodes([elementRef.current]);
         transformerRef.current.getLayer().batchDraw();
      }
   }, [isSelected]);

   return { isDragging, setIsDragging, elementRef, transformerRef };
};

export default useTransformerElement;
