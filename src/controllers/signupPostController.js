const signupPostValidation = require("../validations/signupPostValidation")
const users = require("../models/users");
const sessions = require("../models/session");
const {generateHash} = require("../modules/bcrypt");
const {generateJWT} = require("../modules/jwt");

module.exports = async (req, res) => {
    try {
        const { fullName, phone, username, password } = await signupPostValidation.validateAsync(req.body);

        let user = await users.findOne({
            phone: `+${phone}`
        });

        if(user) throw new Error("This Phone Number already in use")

        user = await users.findOne({
            username: username.toLowerCase()
        });

        if(user) throw new Error("This username already in use");

        const hash = await generateHash(password)

        user = await users.create({
            fullName,
            username: username.toLowerCase(),
            phone: `+${phone}`,
            password: hash
        });

        // auth session
        const userAgent = req.headers['user-agent'];
        const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

        const session = await sessions.create({
            userId: user._id,
            userAgent,
            ipAddress
        });

        const token = generateJWT({
            sessionId: session._id
        });

        res.cookie("token", token).redirect("/profile")
    } catch (e) {
        res.status(400).json({
            ok: false,
            message: e + ""
        })
    }
}