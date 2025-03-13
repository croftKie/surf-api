import express from "express";
import router from "./api/routes/router";
import quality from "./api/utilities/calculations/quality";
import helpers from "./api/utilities/calculations/helpers";
import dataStorage from "./api/storage/dataStorage";

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
