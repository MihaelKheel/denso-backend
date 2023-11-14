const { default: mongoose } = require("mongoose")

const usersSchema = new mongoose.Schema({
    code: String,
    name: String,
    password: String,
    groupId: String,
    isLeader: Boolean,
    type: String,
    email: String,
});

const Users = mongoose.model('users', usersSchema)

module.exports = Users; 