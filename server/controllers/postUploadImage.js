const { v4: uuidv4 } = require("uuid");
const { getCollections } = require("../configs/mongoDB");

// Add a new upload image
const postUploadImage = async (req, res) => {
  try {
    const { images } = getCollections(); // Get the collections

    if (!req.file) {
      // No new upload image
      return res.status(404).json({
        status: 404,
        message: "No new upload image",
      });
    }

    // Add a Sketch
    const postUploadImage = await images.insertOne({
      _id: uuidv4(),
      fileName: req.file.filename,
    });

    if (!postUploadImage.insertedId) {
      // No new upload image
      return res.status(404).json({
        status: 404,
        message: "No new upload image",
      });
    }

    // All good
    return res.status(201).json({
      status: 201,
      data: postUploadImage.insertedId,
      message: "New upload image",
    });
  } catch (err) {
    // Error
    return res.status(500).json({
      status: 500,
      message: err.message,
    });
  }
};

module.exports = { postUploadImage };
