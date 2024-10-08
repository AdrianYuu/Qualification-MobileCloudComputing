require("dotenv").config();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index.routes");
const usersRouter = require("./routes/users.routes");
const animesRouter = require("./routes/animes.routes");
const reviewsRouter = require("./routes/review.routes");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/animes", animesRouter);
app.use("/reviews", reviewsRouter);

module.exports = app;
