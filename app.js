//! CONFIG EXPRESS

const express = require("express");
const app = express();
var cors = require("cors");
const { APP_HOST, APP_PORT } = process.env;

//! CORS
var corsOptions = {
  oring: "http://localhost:5173",
  optionSuccesStatus: 200,
};

//! MIDDLEWARES
app.use(express.json());
app.use(express.static("public"));
app.use(cors(corsOptions));

//! ROUTES

const movieRouter = require("./routers/movieRouter");
app.use("/api/movie", movieRouter);

//! ERROR HANDLERS
const notFound = require("./middleware/notFound");
const errorsHandler = require("./middleware/errorsHandler");
app.use(errorsHandler);
app.use(notFound);

//! SERVER LISTENING

app.listen(3000, () => {
  console.log(`Server listening at ${APP_HOST}:${APP_PORT}`);
});
