const express = require('express');

const router = express.Router();

const { getParts, postParts, deleteParts } = require("../controllers/partsController.js")

router.get("/", getParts)

router.post("/", postParts)

router.delete("/:id", deleteParts)

module.exports = router;