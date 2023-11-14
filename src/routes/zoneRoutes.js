const express = require('express');

const router = express.Router();

const { getZone, postZone, updateZone, deleteZone} = require("../controllers/zoneController.js")

router.get("/", getZone)

router.post("/", postZone)

router.patch("/:id", updateZone);

router.delete("/:id", deleteZone);


module.exports = router;