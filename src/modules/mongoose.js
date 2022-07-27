const mongoose = require("mongoose");
const {MONGO_URL} = require("../../config");

// models
require("../models/messages")
require("../models/posts")
require("../models/users")
require("../models/session")

module.exports = () => {
    mongoose.connect(MONGO_URL, (err) => {
        if(err) console.log("MONGO CONNECTION ERROR:", err)
        else console.log("MONGODB CONNECTED SUCCESSFULLY")
    })
}