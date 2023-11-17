const express = require('express');

const router = express.Router();

const { getTags, postTags, deleteTags, updateTags } = require("../controllers/tagsController.js")

router.get("/", getTags)

router.post("/", postTags)

router.put("/:id", updateTags);

router.delete("/:id", deleteTags)

module.exports = router;