const router = require("express").Router();
const likePostController = require("../controllers/likePostController");
const newPostController = require("../controllers/newPostController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, newPostController)
router.get("/:id/like", authMiddleware, likePostController)

module.exports = {
    path: "/posts",
    router: router
}