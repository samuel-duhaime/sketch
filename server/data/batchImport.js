"use strict";

const sketchsData = require("./sketchsData.json");
const elementsData = require("./elementsData.json");

const { connectMongoDB, getCollections, closeMongoDB } = require("../configs/mongoDB");

// Import all the data
const batchImport = async () => {
  connectMongoDB()
    .then(async () => {
      const { sketchs, elements } = getCollections(); // Get the collections
      const sketchsResult = await sketchs.insertMany(sketchsData); // Insert the sketchsData in MongoDB
      const elementsResult = await elements.insertMany(elementsData); // Insert the elementsData in MongoDB

      console.log({
        sketchsInsertedCount: sketchsResult.insertedCount,
        elementsInsertedCount: elementsResult.insertedCount,
      });
    })
    .then(() => {
      closeMongoDB();
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// Call the batchImport
batchImport();
