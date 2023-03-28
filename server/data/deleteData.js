const { connectMongoDB, getCollections, closeMongoDB } = require("../configs/mongoDB");

// IMPORTANT: Do at your own risk. Delete all the data.
const deleteData = async () => {
  connectMongoDB()
    .then(async () => {
      const { sketchs, elements } = getCollections(); // Get the collections
      const sketchsResult = await sketchs.deleteMany({}); // Delete all the sketchsData in MongoDB
      const elementsResult = await elements.deleteMany({}); // Delete all the elementsData in MongoDB

      console.log({
        sketchsDeletedCount: sketchsResult.deletedCount,
        elementsDeletedCount: elementsResult.deletedCount,
      });
    })
    .then(() => {
      closeMongoDB();
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// Call deleteData
deleteData();
