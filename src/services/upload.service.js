const path = require("path");
const fs = require("fs");
const movieRepository = require('../repository/movie.repository')

const CinemaError = require("../utils/CinemaError");

const extensions = [".jpg", ".png", ".jpeg"];

const uploadImage = async (imagePath, originalName, id) => {
  try {
    const movie = await movieRepository.findById(id);
    if(!movie) throw new CinemaError(400, 'Movie not found!');

    const extension = path.extname(originalName).toLowerCase();
    const targetPath = path.join(require('os').homedir(), "Desktop", "cinema-upload", `${movie.id}${extension}`);
    const includesExtension = extensions.includes(extension);
    let error;
    
    if (includesExtension) {
      fs.rename(imagePath, targetPath, (err) => {
        error = err;
      });

      if (error) throw new CinemaError(403, error);
      movie.imagePath = targetPath
      await movie.save();
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
