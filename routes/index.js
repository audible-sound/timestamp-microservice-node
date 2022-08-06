const ApiController = require("../controllers/api");
const express = require("express");
const router = express.Router();

router.get("/api", ApiController.getDate);
router.get("/api/:date", ApiController.getDate);

module.exports = router;