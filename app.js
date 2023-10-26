const express = require("express");
const morgan = require("morgan");
const bookRouter = require("./api/books/router");
const connectDB = require("./database");
const app = express();
require("dotenv").config();

connectDB();

app.use(express.json());
app.use(morgan("dev"));

app.use("/books", bookRouter);
app.listen(process.env.PORT, () => {
  console.log(`Server connected on port: ${process.env.PORT}`);
});
