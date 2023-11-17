const express = require('express');

const router = express.Router();

const { getGroups, postGroups, updateGroups } = require("../controllers/groupsController.js")

router.get("/", getGroups);

router.post("/", postGroups);

router.put("/:id", updateGroups);


module.exports = router;