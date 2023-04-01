const { getCollections } = require("../configs/mongoDB");

// Get the Sketch document
const getUploadImages = async (req, res) => {
  try {
    const { images } = getCollections(); // Get the collections

    // Get all the upload images document
    const getUploadImages = await images.find().toArray();

    if (!getUploadImages) {
      // No upload images
      return res.status(404).json({
        status: 404,
        message: "No upload images",
      });
    }

    // All good
    return res.status(200).json({
      status: 200,
      data: getUploadImages,
    });
  } catch (err) {
    // Error
    return res.status(500).json({
      status: 500,
      message: err.message,
    });
  }
};

module.exports = { getUploadImages };
