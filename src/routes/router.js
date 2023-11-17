const express = require('express');
const router = express.Router();

router.use("/v1/parts", require("./partsRoutes.js"))
router.use("/v1/zone", require("./zoneRoutes.js"))
router.use("/v1/tags", require("./tagsRoutes.js"))
router.use("/v1/users", require("./usersRoutes.js"))
router.use("/v1/groups", require("./groupsRoutes.js"))

module.exports = router;