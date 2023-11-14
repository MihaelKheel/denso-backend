const { default: mongoose } = require("mongoose")

const zoneSchema = new mongoose.Schema({
    name: String,
    code: String,
    partCodeAndName: String
});

const Zone = mongoose.model('zone', zoneSchema)

module.exports = Zone; 