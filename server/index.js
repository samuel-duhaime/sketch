"use strict";

// Packages
const express = require("express");
const morgan = require("morgan");

// Constants
const PORT = process.env.PORT || 8000;
const app = express();

const { connectMongoDB } = require("./configs/mongoDB");
const { getSketchs } = require("./controllers/getSketchs");
const { getSketch } = require("./controllers/getSketch");
const { postSketch } = require("./controllers/postSketch");
const { patchSketch } = require("./controllers/patchSketch");

/* Middlewares for the app */
// Header for fetching
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Methods", "OPTIONS, HEAD, GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(morgan("tiny")); // Log for server
app.use(express.json()); // Only parsed json
app.use(express.urlencoded({ extended: false })); // Only parsed bodies

connectMongoDB(); // Connect to MongoDB

/* GET */
app.get("/sketchs", getSketchs); // Get all the Sketchs documents
app.get("/sketch/:sketchId", getSketch); // Get the Sketch document

/* POST */
app.post("/sketch", postSketch); // Add a new Sketch document
// postElement
app.post("/element", (req, res) => {
  res.status(200).json({ status: 200, message: "postElement" });
});
// postUploadImage
app.post("/upload/image", (req, res) => {
  res.status(200).json({ status: 200, message: "postUploadImage" });
});

/* Patch */
app.patch("/sketch/:sketchId", patchSketch); // Update the Sketch document
// patchElement
app.patch("/element", (req, res) => {
  res.status(200).json({ status: 200, message: "patchElement" });
});

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
