var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    avatar: {
        type: String
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

const User = mongoose.model("user", userSchema);
module.exports = User;