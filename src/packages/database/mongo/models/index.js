const mongoose = require("mongoose");
const config = require("../../../../../config/config");
mongoose.Promise = global.Promise;

mongoose.connection.on("connected", function () {
    console.log({ level: 'info', message: `mongo connected` });
});
mongoose.connection.on("error", function (err) {
    console.log(err, { message: `Mongoose connection error` });
});
mongoose.connection.on("disconnected", function () {
    console.log({ message: `Mongoose disconnected` });
});

module.exports.connect = async () => {
    await mongoose.connect(config.MONGO.url, config.MONGO.options);
    mongoose.connection.set("maxTimeMS", 100)
}
module.exports.disconnect = async () => {
    await mongoose.disconnect();
}