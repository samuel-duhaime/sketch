const { getCollections } = require("../configs/mongoDB");

// Update the element document
const patchElement = async (req, res) => {
  const { elementId } = req.params;
  const { text, x, y, width, height, fontFamily, fontSize, isBold, isItalic, isUnderline, isUppercase, align } =
    req.body;

  // Bad request
  if (
    !text &&
    !x &&
    !y &&
    !width &&
    !height &&
    !fontFamily &&
    !fontSize &&
    isBold !== undefined &&
    isItalic !== undefined &&
    isUnderline !== undefined &&
    isUppercase !== undefined &&
    !align
  ) {
    return res.status(400).json({
      status: 400,
      message: "Bad request",
    });
  }

  // Set the new element modifications
  const elementsModifications = {
    ...(text && { text }),
    ...(x && { x }),
    ...(y && { y }),
    ...(width && { width }),
    ...(height && { height }),
    ...(fontFamily && { fontFamily }),
    ...(fontSize && { fontSize }),
    ...(isBold !== undefined && { isBold }),
    ...(isItalic !== undefined && { isItalic }),
    ...(isUnderline !== undefined && { isUnderline }),
    ...(isUppercase !== undefined && { isUppercase }),
    ...(align && { align }),
  };

  try {
    const { elements } = getCollections(); // Get the collections

    const patchElement = await elements.updateOne({ _id: elementId }, { $set: elementsModifications }); // Update the element

    if (patchElement.matchedCount !== 1) {
      // No matched element
      return res.status(404).json({
        status: 404,
        message: "No matched element",
      });
    }

    if (patchElement.modifiedCount !== 1) {
      // No modified element
      return res.status(404).json({
        status: 404,
        message: "No modified element",
      });
    }

    // All good
    return res.status(200).json({
      status: 200,
      message: "Element update",
    });
  } catch (err) {
    // Error
    return res.status(500).json({
      status: 500,
      message: err.message,
    });
  }
};

module.exports = { patchElement };
