const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    poster_id: {
        type: String,
        required: true
    },
    // Id of user who posted it
    wrote_by: {
        type: String, 
        required: true
    },
    // Array of user ids
    liked_by : [
        {
            type: String,
            required: true
        }
    ],
    // Array of comment ids
    comments: [
        {
            type: String, 
            required: true
        }
    ],
    // Array of users ids that retweeted
    retweeted: [
        {
            type: String,
            required: true
        }
    ],
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = Post = mongoose.model('Post', PostSchema);
