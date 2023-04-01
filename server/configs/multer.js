const multer = require("multer"); // For uploading image
const path = require("path");

// Storage of Multer upload image
const storage = multer.diskStorage({
  /* Destination of the image */
  destination: (req, file, cb) => {
    cb(null, "C:/Users/Sam/Desktop/Programmation/Applications/sketch/client/public/upload");
  },

  /* Name of the image */
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + "-" + file.originalname); // Unique name
  },
});

// Filter the upload to only image
const imageFilter = (req, file, callback) => {
  const fileExtension = path.extname(file.originalname);

  // Check the file extension
  if (fileExtension !== ".png" && fileExtension !== ".jpg" && fileExtension !== ".jpeg") {
    return callback(new Error("Only image are allowed"));
  }
  callback(null, true);
};

// Limits the size of the file upload
const limitsSize = {
  fileSize: 1024 * 1024,
};

const uploadImageMulter = multer({ storage: storage, fileFilter: imageFilter, limits: limitsSize });

module.exports = {
  uploadImageMulter,
};
