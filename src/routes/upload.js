const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadService = require("../services/upload.service");

const uploadFolderPath = path.join(
  require("os").homedir(),
  "Desktop",
  "cinema-upload"
);

const upload = multer({
  dest: uploadFolderPath,
});

router.post("/image/:id", upload.single("image"), async (req, res) => {
  try {
    const imagePath = req.file.path;
    const originalName = req.file.originalname;
    const id = req.params.id;
    const response = await uploadService.uploadImage(
      imagePath,
      originalName,
      id
    );
    res.send(response);
  } catch (error) {
    res.status(error.code).send(error);
  }
});

router.get("/image", async (req, res) => {
  const image = fs.readFileSync(`${uploadFolderPath}/photo.jpg`, {
    encoding: "base64",
  });
  res.send({ image });
});

module.exports = router;
