const router = require("express").Router();
const homeGetController = require("../controllers/homeGetController");

router.get("/", homeGetController)

module.exports = {
    path: "/",
    router: router
}