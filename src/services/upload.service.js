const path = require("path");
const fs = require("fs");

const CinemaError = require("../utils/CinemaError");

const extensions = [".jpg", ".png", ".jpeg"];

const uploadImage = async (imagePath, originalName) => {
  try {
    const extension = path.extname(originalName).toLowerCase();
    const targetPath = `/home/mile/Desktop/cinema-upload/photo${extension}`;
    const includesExtension = extensions.includes(extension);
    let error;

    if (includesExtension) {
      fs.rename(imagePath, targetPath, (err) => {
        error = err;
      });
      if (error) throw new CinemaError(403, error);
      return targetPath;
    } else {
      fs.unlink(imagePath, (err) => {
        error = err;
      });
      throw new CinemaError(403, "Only .png, .jpg, .jpeg files are allowed!");
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  uploadImage,
};
