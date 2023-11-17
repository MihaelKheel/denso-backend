const express = require('express');

const router = express.Router();

const { getParts, postParts, deleteParts, updateParts } = require("../controllers/partsController.js")

router.get("/", getParts)

router.post("/", postParts)

router.put("/:id", updateParts);

router.delete("/:id", deleteParts)

module.exports = router;