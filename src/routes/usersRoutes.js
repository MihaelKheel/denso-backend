const express = require('express');

const router = express.Router();

const { getUsers, postUsers, deleteUsers } = require("../controllers/usersController.js")

router.get("/", getUsers)

router.post("/", postUsers)

router.delete("/:id", deleteUsers)

module.exports = router;