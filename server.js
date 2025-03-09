const express = require("express");
const router = require("./api/routes/router");
const quality = require("./api/utilities/calculations/quality");
const helpers = require("./api/utilities/calculations/helpers");
const dataStorage = require("./api/storage/dataStorage");

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const timeLog = (req, res, next) => {
  console.log("Time:", Date.now());
  next();
};

app.use(timeLog);

app.use("/", router);

quality._test();
helpers._test();
dataStorage.getWaveData();
