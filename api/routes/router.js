import express from "express";
const router = express.Router();
import {
  getGeoData,
  getTempDataByGeo,
  getTempDataByLoc,
  getWaveDataByGeo,
  getWaveDataByLoc,
  getWindDataByGeo,
  getWindDataByLoc,
} from "./controllers/dataController.js";
// GET ROUTES
//
//

router.get("/geoData", getGeoData);
router.get("/waveDataByGeo", getWaveDataByGeo);
router.get("/windDataByGeo", getWindDataByGeo);
router.get("/tempDataByGeo", getTempDataByGeo);
router.get("/waveDataByLoc", getWaveDataByLoc);
router.get("/windDataByLoc", getWindDataByLoc);
router.get("/tempDataByLoc", getTempDataByLoc);

// CATCH ALL
//
//

router.get("*", (req, res) => {
  res.send("No Route Found");
});

export default router;
