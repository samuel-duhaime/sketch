// limit resize of the element to minimum of 5px
const handleLimitResize = (oldBox, newBox) => {
   if (newBox.width < 10 || newBox.height < 10) {
      return oldBox;
   }
   return newBox;
};

export default handleLimitResize;
