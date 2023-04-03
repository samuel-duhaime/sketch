const { v4: uuidv4 } = require("uuid");
const { getCollections } = require("../configs/mongoDB");

// Add a new element document
const postElement = async (req, res) => {
  const { sketchId } = req.params;
  const {
    pageKey,
    type,
    text,
    imageUrl,
    x,
    y,
    width,
    height,
    fontFamily,
    fontSize,
    color,
    backgroundColor,
    isBold,
    isItalic,
    isUnderline,
    isUppercase,
    align,
  } = req.body;

  // Bad request
  if (!pageKey?.startsWith("page") || !type || !x || !y || !width || !height) {
    return res.status(400).json({
      status: 400,
      message: "Bad request",
    });
  }

  // Find the Sketch
  try {
    const { sketchs, elements } = getCollections(); // Get the collections

    const findSketch = await sketchs.findOne({ _id: sketchId });

    if (!findSketch) {
      // No sketch
      return res.status(404).json({
        status: 404,
        message: "No Sketch",
      });
    }

    // Add the element
    const postElement = await elements.insertOne({
      _id: uuidv4(),
      type,
      ...(text && { text }),
      ...(imageUrl && { imageUrl }),
      x,
      y,
      width,
      height,
      ...(fontFamily && { fontFamily }),
      ...(fontSize && { fontSize }),
      ...(color && { color }),
      ...(backgroundColor && { backgroundColor }),
      ...(isBold !== undefined && { isBold }),
      ...(isItalic !== undefined && { isItalic }),
      ...(isUnderline !== undefined && { isUnderline }),
      ...(isUppercase !== undefined && { isUppercase }),
      ...(align && { align }),
    });

    if (!postElement.insertedId) {
      // No new element
      return res.status(404).json({
        status: 404,
        message: "No new element",
      });
    }

    // Update the Sketch with the new element
    const patchSketch = await sketchs.updateOne(
      { _id: sketchId },
      { $push: { [`${pageKey}.elements`]: postElement.insertedId } }
    );

    if (patchSketch.modifiedCount !== 1) {
      // No modified Sketch
      return res.status(404).json({
        status: 404,
        message: "No modified Sketch",
      });
    }

    // All good
    return res.status(200).json({
      status: 200,
      data: postElement.insertedId,
      message: "New element",
    });
  } catch (err) {
    // Error
    return res.status(500).json({
      status: 500,
      message: err.message,
    });
  }
};

module.exports = { postElement };
