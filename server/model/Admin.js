var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var adminSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true }
);

const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;