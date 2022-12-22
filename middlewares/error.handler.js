function logErrors (err, req, res, next) {
  console.log("log errors")
  console.log(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  console.log("error handler")
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  })
}

module.exports = { logErrors, errorHandler }
