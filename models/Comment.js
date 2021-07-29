const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    // Comment belongs to this post
    post_id: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    // Id of user that wrote the comment
    wrote_by:{
        type: String,
        required: true
    },
    // Array of users ids that liked this comment
    liked_by : [
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


mondule.exports = Comment = mongoose.model('Comment', CommentSchema);