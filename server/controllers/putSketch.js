const { getCollections } = require("../configs/mongoDB");

// Replace the Sketch document
const putSketch = async (req, res) => {
  const { sketchId } = req.params;
  const { sketchName, isShared, imageUrl, pages } = req.body;

  // Bad request
  if (!sketchName || isShared === undefined || !pages) {
    return res.status(400).json({
      status: 400,
      message: "Bad request",
    });
  }

  // Get all the pages object of the Sketch
  let pagesObject = {};
  pages?.forEach((page) => {
    pagesObject = { ...pagesObject, [page._id]: page };
  });

  try {
    const { sketchs } = getCollections(); // Get the collections

    // Replace the Sketch
    const putSketch = await sketchs.replaceOne(
      { _id: sketchId },
      { sketchName, isShared, imageUrl, ...(pagesObject && pagesObject) }
    );

    if (putSketch.matchedCount !== 1) {
      // No matched sketch
      return res.status(404).json({
        status: 404,
        message: "No matched Sketch",
      });
    }

    if (putSketch.modifiedCount !== 1) {
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

module.exports = { putSketch };
