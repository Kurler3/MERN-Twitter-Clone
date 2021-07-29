const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/User');

// Create Routes

// @route GET api/users
// @desc Get All Users
// @access Public
router.get('/', (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => console.log(err));
})


module.exports = router;