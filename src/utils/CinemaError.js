module.exports = function CinemaError(code, message) {
    Error.captureStackTrace(this, this.constructor);
    this.message = message;
    this.code = code;
  };
  
  require('util').inherits(module.exports, Error);