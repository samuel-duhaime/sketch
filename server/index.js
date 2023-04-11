"use strict";

// Packages
const express = require("express"); // For server framework
const morgan = require("morgan"); // For server information

// Constants
const PORT = process.env.PORT || 8000;
const app = express();

// Configs
const { connectMongoDB } = require("./configs/mongoDB");
const { uploadImageMulter } = require("./configs/multer");

// Controllers
const { getSketchs } = require("./controllers/getSketchs");
const { getSketch } = require("./controllers/getSketch");
const { getUploadImages } = require("./controllers/getUploadImages");
const { postSketch } = require("./controllers/postSketch");
const { postElement } = require("./controllers/postElement");
const { postUploadImage } = require("./controllers/postUploadImage");
const { putSketch } = require("./controllers/putSketch");
const { patchElement } = require("./controllers/patchElement");

/* Middlewares for the app */
// Header for fetching
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Methods", "OPTIONS, HEAD, GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(morgan("tiny")); // Log for server
app.use(express.json({ limit: "50mb" })); // Only parsed json. Need a limit to save the imageDataUrl
app.use(express.urlencoded({ extended: false })); // Only parsed bodies

connectMongoDB(); // Connect to MongoDB

/* GET */
app.get("/sketchs", getSketchs); // Get all the Sketchs documents
app.get("/sketch/:sketchId", getSketch); // Get the Sketch document
app.get("/upload/images", getUploadImages); // Get all the Images upload documents

/* POST */
app.post("/sketch", postSketch); // Add a new Sketch document
app.post("/element/:sketchId", postElement); // Add a new element document
app.post("/upload/image", uploadImageMulter, postUploadImage); // Add a new upload image document with Multer

/* PATCH */
app.patch("/element/:elementId", patchElement); // Update the element document

/* PUT */
app.put("/sketch/:sketchId", putSketch); // Replace the Sketch document

/* Catch all endpoint */
app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Not an endpoint",
  });
});

// Listen
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
