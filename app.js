//! CONFIG EXPRESS

const express = require("express");
const app = express();

const { APP_HOST, APP_PORT } = process.env;

//! MIDDLEWARES
app.use(express.json());
app.use(express.static("public"));

//! ROUTES

const movieRouter = require("./routers/movieRouter");
app.use("/movie", movieRouter);

//! ERROR HANDLERS
const notFound = require("./middleware/notFound");
const errorsHandler = require("./middleware/errorsHandler");
app.use(errorsHandler);
app.use(notFound);

//! SERVER LISTENING

app.listen(3000, () => {
  console.log(`Server listening at ${APP_HOST}:${APP_PORT}`);
});
