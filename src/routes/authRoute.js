const router = require("express").Router();
const signupGetController = require("../controllers/signupGetController");
const loginGetController = require("../controllers/loginGetController");
const signupPostController = require("../controllers/signupPostController");
const loginPostController = require("../controllers/loginPostController");
const profileGetController = require("../controllers/profileGetController");
const avatarPostController = require("../controllers/avatarPostController");
const editProfilePostController = require("../controllers/editProfilePostController");
const followPostController = require("../controllers/followPostController");
const unfollowPostController = require("../controllers/unfollowPostController");

const authMiddleware = require("../middlewares/authMiddleware");

router.get("/login", loginGetController)
router.get("/signup", signupGetController)

router.post("/signup", signupPostController)
router.post("/login", loginPostController)

router.get("/:username", authMiddleware, profileGetController)
router.get("/:username/follow", authMiddleware, followPostController)
router.post("/:id/edit-profile", authMiddleware, editProfilePostController)
router.get("/:username/unfollow", authMiddleware, unfollowPostController)

router.post("/avatar", authMiddleware, avatarPostController)
module.exports = {
    path: "/users",
    router: router
}