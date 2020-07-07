const router = require("express").Router();
const multer = require("multer");
const fs = require("fs");

const uploadService = require("../services/upload.service");

const upload = multer({
  dest: "/home/mile/Desktop/cinema-upload/",
});

router.post("/image", upload.single("image"), async (req, res) => {
  try {
    const imagePath = req.file.path;
    const originalName = req.file.originalname;
    const response = await uploadService.uploadImage(imagePath, originalName);
    res.send(response);
  } catch (error) {
    res.status(error.code).send(error);
  }
});

router.get("/image", async (req, res) => {
  const image = fs.readFileSync("/home/mile/Desktop/cinema-upload/photo.jpg", {
    encoding: "base64",
  });
  res.send({ image });
});

module.exports = router;
