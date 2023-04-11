const { v4: uuidv4 } = require("uuid");
const { getCollections } = require("../configs/mongoDB");

// Add a new Sketch document
const postSketch = async (req, res) => {
  try {
    const { sketchs } = getCollections(); // Get the collections

    // Add a Sketch
    const postSketch = await sketchs.insertOne({
      _id: uuidv4(),
      sketchName: "Undefined",
      page1: {
        _id: "page1",
        page: 1,
        pageName: "Undefined",
        width: 800,
        height: 550,
        backgroundColor: "#ffffff",
        elements: [],
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
    return res.status(201).json({
      status: 201,
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
};

module.exports = { postSketch };
