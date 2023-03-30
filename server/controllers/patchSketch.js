const { getCollections } = require("../configs/mongoDB");

// Update the Sketch document
const patchSketch = async (req, res) => {
  const { sketchId } = req.params;
  const { sketchName, isShared } = req.body;

  // Bad request
  if (!sketchName && !isShared) {
    return res.status(400).json({
      status: 400,
      message: "Bad request",
    });
  }

  // TODO page actions
  // Set the new Sketchs modifications
  const sketchModifications = {
    ...(sketchName && { sketchName }),
    ...(isShared !== undefined && { isShared }),
  };

  try {
    const { sketchs } = getCollections(); // Get the collections

    const patchSketch = await sketchs.updateOne({ _id: sketchId }, { $set: sketchModifications }); // Update the Sketch

    if (patchSketch.matchedCount !== 1) {
      // No matched sketch
      return res.status(404).json({
        status: 404,
        message: "No matched Sketch",
      });
    }

    if (patchSketch.modifiedCount !== 1) {
      // No modified sketch
      return res.status(404).json({
        status: 404,
        message: "No modified Sketch",
      });
    }

    // All good
    return res.status(200).json({
      status: 200,
      message: "Sketch update",
    });
  } catch (err) {
    // Error
    return res.status(500).json({
      status: 500,
      message: err.message,
    });
  }
};

module.exports = { patchSketch };
