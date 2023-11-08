const express = require('express');

const app = express();
app.use(express.json())
const dotenv = require("dotenv").config();
const colors = require("colors");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectDB = require("./ConnectDB");
connectDB();
const cors = require('cors');
app.use(cors())

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})

app.use("/api/geo", require("./routes/router.js"))