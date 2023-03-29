const { v4: uuidv4 } = require("uuid");
const { getCollections } = require("../configs/mongoDB");

// Add a new Sketch document
const postSketch = async (req, res) => {
  try {
    const { sketchs } = getCollections(); // Get the collections

    // Get the first sketch document that match with the join elements
    const postSketch = await sketchs.insertOne({
      _id: uuidv4(),
      sketchName: "Undefined Sketch name",
      isModified: false,
      page1: {
        page: 1,
        pageName: "Undefined page name",
        width: 800,
        height: 550,
        backgroundColor: "white",
        elements: [],
        isModified: false,
      },
    });

    if (!postSketch.insertedId) {
      // No new sketch
      return res.status(404).json({
        status: 404,
        message: "No new Sketch",
      });
    }

    // All good
    return res.status(200).json({
      status: 200,
      data: postSketch.insertedId,
      message: "New Sketch",
    });
  } catch (err) {
    // Error
    return res.status(500).json({
      status: 500,
      message: err.message,
    });
  }

  // All good
  res.status(200).json({ status: 200, message: "postSketch" });
};

module.exports = { postSketch };
