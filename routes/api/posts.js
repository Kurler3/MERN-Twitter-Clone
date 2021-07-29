const express = require('express');
const router = express.Router();


// Use Post Model
const Post = require('../../models/Post');

// Create Routes

// @route GET api/posts
// @desc Get all posts
// @access public
router.get('/', (req, res) => {
    Post.find()
    .then(posts => res.json(posts))
    .catch(err => console.log(err));
})



module.exports = router;