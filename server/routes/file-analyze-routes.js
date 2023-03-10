const express = require("express");
const router = express.Router();
const multer = require("multer");
const fileRouterController = require("../controllers/file-analyze-controller");

const maxSize = 7 * 1024 * 1024;
const upload = multer({ dest: "uploads/", limits: { fieldSize: maxSize } });

// let filestorageEngine = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({
//   storage: filestorageEngine,
// });

let fileRouterObj = new fileRouterController();
router.post("/analyze-file", upload.single("file"), fileRouterObj.analyzeFile);

module.exports = router;
