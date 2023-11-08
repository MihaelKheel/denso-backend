const express = require('express');
const router = express.Router();

router.use("/v1/parts", require("./partsRoutes.js"))

module.exports = router;