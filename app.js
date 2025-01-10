//! CONFIG EXPRESS

const express = require("express");
const app = express();

const { APP_HOST, APP_PORT } = process.env;

//! ROUTES

const movieRouter = require("./routers/movieRouter");
app.use("/movie", movieRouter);

//! SERVER LISTENING

app.listen(3000, () => {
  console.log(`Server listening at ${APP_HOST}:${APP_PORT}`);
});
