const { default: mongoose } = require("mongoose")

const groupsSchema = new mongoose.Schema({
    name: String,
    code: String,
    zone1: String,
    zone2: String,
    zone3: String,
    zone4: String,
    zone5: String,
});

const Groups = mongoose.model('groups', groupsSchema)

module.exports = Groups; 