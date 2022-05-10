import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    faculty: String,
    course: String,
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;