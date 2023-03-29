const { getCollections } = require("../configs/mongoDB");

// Get the Sketch document
const getSketch = async (req, res) => {
  const { sketchId } = req.params;

  try {
    const { sketchs, elements } = getCollections(); // Get the collections

    // Get the first sketch document that match with the join elements
    const getSketch = await sketchs.findOne({ _id: sketchId });

    if (!getSketch) {
      // No Sketch
      return res.status(404).json({
        status: 404,
        message: "No Sketch",
      });
    }

    // Get all the elements of the page
    const getElementsFromPage = async ({ pageId }) => {
      let getElements = [];

      // Loop all the elementsIndex of the page. We need a for and not a forEach, because it's async.
      for (let elementIndex = 0; elementIndex < getSketch[`${pageId}`].elements.length; elementIndex++) {
        const getElement = await elements.findOne({ _id: getSketch[`${pageId}`].elements[elementIndex] }); // Get the elementIndex
        getElements.push(getElement); // Push it in getElements array
      }
      getSketch[`${pageId}`].elements = getElements; // Set the page elements
    };

    // Find all the pages key
    const pagesKey = Object.keys(getSketch).filter((keyName) => keyName.startsWith("page"));

    // Loop all the pagesKey of the page. We need a for and not a forEach, because it's async.
    for (let pagesIndex = 0; pagesIndex < pagesKey.length; pagesIndex++) {
      await getElementsFromPage({ pageId: pagesKey[pagesIndex] });
    }

    // All good
    return res.status(200).json({
      status: 200,
      data: getSketch,
    });
  } catch (err) {
    // Error
    return res.status(500).json({
      status: 500,
      message: err.message,
    });
  }
};

module.exports = { getSketch };
