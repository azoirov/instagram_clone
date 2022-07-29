const express = require("express");
const fs = require("fs");
const path = require("path");
const cookieParser = require("cookie-parser")
const fileUpload = require("express-fileupload")
const {PORT} = require("../config");
const mongoose = require("./modules/mongoose");

const app = express();

mongoose()

app.listen(PORT, () => console.log(`SERVER READY AT http://localhost:${PORT}`));

// settings
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));

// middlewares
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())
app.use("/public", express.static(path.join(__dirname, "public")))

fs.readdir(path.join(__dirname, "routes"), (err, files) => {
    if(!err) {
        files.forEach(file => {
            const routePath = path.join(__dirname, "routes", file);
            const route = require(routePath);

            if(route.path && route.router) app.use(route.path, route.router)
        })
    }
});