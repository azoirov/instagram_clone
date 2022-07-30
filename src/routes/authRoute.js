const router = require("express").Router();
const signupGetController = require("../controllers/signupGetController");
const loginGetController = require("../controllers/loginGetController");
const signupPostController = require("../controllers/signupPostController");
const loginPostController = require("../controllers/loginPostController");
const profileGetController = require("../controllers/profileGetController");
const avatarPostController = require("../controllers/avatarPostController");
const followPostController = require("../controllers/followPostController");
const authMiddleware = require("../middlewares/authMiddleware");
const fileUpload = require("express-fileupload")

router.get("/login", loginGetController)
router.get("/signup", signupGetController)

router.post("/signup", signupPostController)
router.post("/login", loginPostController)

router.get("/:username", authMiddleware, profileGetController)
router.get("/:username/follow", authMiddleware, followPostController)

router.post("/avatar", authMiddleware, avatarPostController)
module.exports = {
    path: "/users",
    router: router
}