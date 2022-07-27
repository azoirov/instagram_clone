const router = require("express").Router();
const signupGetController = require("../controllers/signupGetController");
const loginGetController = require("../controllers/loginGetController");

router.get("/login", loginGetController)
router.get("/signup", signupGetController)

module.exports = {
    path: "/users",
    router: router
}