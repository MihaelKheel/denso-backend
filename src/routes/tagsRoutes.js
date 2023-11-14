const express = require('express');

const router = express.Router();

const { getTags, postTags, deleteTags } = require("../controllers/tagsController.js")

router.get("/", getTags)

router.post("/", postTags)

router.delete("/:id", deleteTags)

module.exports = router;