const express = require("express");
const router = express.Router();
const activityController = require("../controllers/activity.controller");
router.get("/", activityController.getActivity);
router.post("/save", activityController.saveActivity);

module.exports = router;
