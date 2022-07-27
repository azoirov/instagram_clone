const router = require("express").Router()
const profileGetController = require("../controllers/profileGetController");

router.get("/", profileGetController)

module.exports = {
    path: "/profile",
    router
}