const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    at: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    // Array of ids of users that this user follows
    following: [
        {
            type:String,
            required:true
        }
    ],
    // Array of ids of users that this user is followed by
    followers: [
        {
            type:String,
            required:true
        }
    ],
    timestamp: {
        type: Date,
        default: Date.now
    },
});

module.exports = User = mongoose.model('user', UserSchema);
