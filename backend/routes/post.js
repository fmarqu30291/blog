const express = require('express');
const router  = express.Router();
const blog_control = require('../control/blog_control.js');

// GET request for listing all blogpost
router.get('/', blog_control.get_blogs);

// GET to acces for, POST to send request to create blog
// router.get('/post', blog_controller.blog_create_get)
router.post('/blog-post', blog_control.create_blog);

module.exports = router;