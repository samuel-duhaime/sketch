const { getCollections } = require("../configs/mongoDB");

// Get all the Sketchs documents
const getSketchs = async (req, res) => {
  try {
    const { sketchs } = getCollections(); // Get the collections

    // Get all the Sketch document that match is shared
    const getSketchs = await sketchs
      .find({ isShared: true })
      .project({ _id: 1, sketchName: 1, imageUrl: 1, "page1.width": 1, "page1.height": 1 }) // Select only the project fields
      .toArray();

    if (!getSketchs) {
      // No Sketchs
      return res.status(404).json({
        status: 404,
        message: "No Sketchs",
      });
    }

    // All good
    return res.status(200).json({
      status: 200,
      data: getSketchs,
    });
  } catch (err) {
    // Error
    return res.status(500).json({
      status: 500,
      message: err.message,
    });
  }
};

module.exports = { getSketchs };
