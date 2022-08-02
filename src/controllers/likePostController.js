const posts = require("../models/posts");

module.exports = async (req, res) => {
    try {
        const {id} = req.params;

        const post = await posts.findById(id);

        if(!post) throw new Error("Post Not Found");

        const flag = post.likes.find(el => el.userId.toString() === req.user._id.toString());

        if(!flag) {
            await posts.findByIdAndUpdate(id, {
                $push: { likes: {userId: req.user._id} }
            })
        }

        res.redirect("/")
    } catch (e) {
        res.status(400).json({
            ok: false,
            message: e + ""
        })
    }
}