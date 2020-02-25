const express = require("express");
const createError = require("http-errors");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

app.use(logger("dev"));
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use("/", indexRouter);

// Catch all error handler
app.use((error, req, res, next) => {
  // Set error information, with stack only available in development
  res.locals.message = error.message;
  res.locals.error = req.app.get("env") === "development" ? error : {};
  res.status(error.status || 500);
});

module.exports = app;