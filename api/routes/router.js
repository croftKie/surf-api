import express from "express";
const router = express.Router();
import { getData } from "./controllers/dataController.js";
// GET ROUTES
//
//

router.get("/data", getData);

// POST ROUTES
//
//

// CATCH ALL
//
//

router.get("*", (req, res) => {
  res.send("No Route Found");
});

export default router;
