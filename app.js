const express = require("express");
const morgan = require("morgan");
const app = express();

const cors = require("cors");
const httpStatus = require("http-status");
const config = require("./src/config");
const globalErrorHandler = require("./src/middlewares/globalErrorHandler");
const routes = require("./src/routes");
const ApiError = require("./src/errors/ApiError");

let whitelist = [];

if (config.env !== "production") {
  whitelist.push("http://localhost:3000");
}

const corsOptions = function (req, callback) {
  let corsOptions;
  // Check if the origin contains the allowed domains.
  if (!req.header("Origin") || whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = {
      origin: req.header("Origin"),
      credentials: true,
      exposedHeaders: ["x-file-name"],
    }; // reflect (enable) the requested origin in the CORS response
    callback(null, corsOptions);
  } else {
    callback(new ApiError(httpStatus.FORBIDDEN, "Forbidden Request"));
  }
  // callback expects two parameters: error and options
};

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", routes);

app.use(globalErrorHandler);

app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      { path: req.originalUrl, message: "API is not available!" },
    ],
  });
  next();
});

module.exports = app;
