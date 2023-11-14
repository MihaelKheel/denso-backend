const { default: mongoose } = require("mongoose")

const partsSchema = new mongoose.Schema({
    code: Number,
    name: String,
    kpiValue: Number,
});

const Parts = mongoose.model('parts', partsSchema)

module.exports = Parts; 