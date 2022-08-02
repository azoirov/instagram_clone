const posts = require("../models/posts");

module.exports = async (req, res) => {
    try {
        const postList = await posts.aggregate([
            {
                $lookup: {
                    localField: "userId",
                    foreignField: "_id",
                    from: "users",
                    as: 'user'
                }
            },
            {
                $unwind: {
                    path: "$user"
                }
            }
        ]);

        res.render("index", {
            posts: postList
        })
    } catch (e) {
        res.status(400).json({
            ok: false,
            message: e + ""
        })
    }
}