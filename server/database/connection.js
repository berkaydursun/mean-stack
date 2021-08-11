var mongoose = require("mongoose");

// Connect to MongoDb
module.exports = () => {
    mongoose.connect("mongodb+srv://berkaydursun:berkaydursun08@usersdb.z7jnu.mongodb.net/userdb?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true });

    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
    });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });

    mongoose.Promise = global.Promise;
}