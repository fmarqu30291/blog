const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    blog_header: { type: String, require: true, maxLength: 70, default: "missing header" },
    blog_creator: { type: String, require: true, default: "missing creator" },
    blog_content: { type: String, require: true, default: "missing content" }
})

const BlogModel = mongoose.model("BlogModel", BlogSchema);
module.exports = BlogModel;
