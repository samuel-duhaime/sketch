const { MongoClient } = require("mongodb");
const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "../.env") }); // Path to .env

const { MONGO_URI, MONGO_DB_NAME } = process.env;

// Options for MongoDB
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Constants for mongoDB
let client, db;

// Connect to MongoDB client
const connectMongoDB = async () => {
  try {
    client = new MongoClient(MONGO_URI, options); // Create a new client Class
    await client.connect(); // connect to the client
    db = client.db(MONGO_DB_NAME); // Connect to the database ecommerce
    console.log("MongoDB is connect");
  } catch (err) {
    console.log(err.message);
  }
};

// Get all the collections of this MongoDB project
const getCollections = () => {
  const sketchs = db.collection("sketchs"); // Sketchs collection
  const elements = db.collection("elements"); // Elements collection
  const images = db.collection("images"); // Images uploads collection

  return { sketchs, elements, images };
};

// Close MongoDB client
const closeMongoDB = () => {
  console.log("MongoDB is close");
  client.close();
};

module.exports = {
  connectMongoDB,
  getCollections,
  closeMongoDB,
};
