const {Schema, model} = require("mongoose");

const sessionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    userAgent: {
        type: String,
        required: true
    },
    ipAddress: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model("sessions", sessionSchema)