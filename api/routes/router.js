const express = require("express");
const router = express.Router();
const { getData } = require("./controllers/dataController");
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

module.exports = router;
