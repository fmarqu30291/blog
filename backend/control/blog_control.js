const BlogModel = require("../model/blog_model.js");

const get_blogs = (req, res) => {
  BlogModel.find({})
    .then((blogs) => {
      res.status(200).send(blogs);
    })
    .catch((err) => {
      res.status(500).send({
        status: 500,
        msg: 'No Blogs At the Moment :('
      });
    });
};

const create_blog = (req, res) => {
  const incomingData = req.body;
  const newBlog = new BlogModel(incomingData);

  newBlog.save()
    .then((doc) => {
      res.status(200).send({
        message: 'Blog successfully created :)',
        document: doc
      });
    })
    .catch((err) => {
      res.status(500).send({
        err: err,
        message: 'Uh Oh. Error Occurred. Could not create blog. Sorry. Try Again!'
      });
    });
};

module.exports = { get_blogs, create_blog };