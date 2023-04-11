// When the Text is about to get edit
const handleTextEdit = (ev, { element, elementRef, stageRef, transformerRef, patchElementAction }) => {
  const stagePosition = stageRef.current.container().getBoundingClientRect(); // Find position of stage container
  const textPosition = elementRef.current.getAbsolutePosition(); // Find position of Text relative to the stage
  const textarea = document.createElement("textarea"); // Create a textarea to edit the text

  // Get the area position of the Text
  const areaPosition = {
    x: stagePosition.x + textPosition.x,
    y: stageRef.current.container().offsetTop + 106 + textPosition.y, // Put it the closer possible of the target
  };

  elementRef.current.hide(); // Hide the Text
  transformerRef.current.hide(); // Hide the transformer

  document.body.appendChild(textarea); // Link the textarea to the body

  // Style the textarea
  textarea.value = elementRef.current.text();
  textarea.style.position = "absolute";
  textarea.style.top = areaPosition.y + "px";
  textarea.style.left = areaPosition.x + "px";
  textarea.style.border = "none";
  textarea.style.padding = "0px";
  textarea.style.margin = "0px";
  textarea.style.overflow = "hidden";
  textarea.style.background = "none";
  textarea.style.outline = "none";
  textarea.style.resize = "none";
  textarea.style.transformOrigin = "left top";
  textarea.style.fontStyle = element.isItalic ? "italic" : "normal";
  textarea.style.fontWeight = element.isBold ? 700 : 400;
  textarea.style.width = elementRef.current.width() + "px";
  textarea.style.height = elementRef.current.height() - elementRef.current.padding() * 2 + 5 + "px";
  textarea.style.fontSize = elementRef.current.fontSize() + "px";
  textarea.style.lineHeight = elementRef.current.lineHeight();
  textarea.style.fontFamily = elementRef.current.fontFamily();
  textarea.style.fontVariant = elementRef.current.fontVariant();
  textarea.style.textDecoration = elementRef.current.textDecoration();
  textarea.style.textAlign = elementRef.current.align();
  textarea.style.color = elementRef.current.fill();
  textarea.style.transform = `rotate(${elementRef.current.rotation()}deg)`;

  textarea.focus(); // Focus the textarea to edit

  // Remove the textarea when finished
  const removeTextarea = () => {
    document.body.removeChild(textarea); // Delete the textarea
    // Patch the element with the new value
    patchElementAction({
      newData: { text: textarea.value, height: textarea.scrollHeight + elementRef.current.fontSize() },
    });
    window.removeEventListener("click", handleOutsideClick);
    elementRef?.current?.show(); // Show the element
    transformerRef?.current?.show(); // Show the transformer
    transformerRef?.current?.forceUpdate();
  };

  // When the user click outsite the Text element
  const handleOutsideClick = (ev) => {
    if (ev.target !== textarea) {
      removeTextarea(); // Remove the textarea when finished
    }
  };

  // Hide the textarea on enter
  textarea.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter") {
      removeTextarea(); // Remove the textarea when finished
    }
  });

  // Reset the height after each keydown
  textarea.addEventListener("keydown", function (e) {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + elementRef.current.fontSize() + "px";
  });

  setTimeout(() => {
    window.addEventListener("click", handleOutsideClick);
  });
};

export default handleTextEdit;
