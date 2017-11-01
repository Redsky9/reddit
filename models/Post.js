let mongoose = require('mongoose');
// mongoose.createConnection(keys.mongoURI.posts);
let {Schema} = mongoose; // let Schema = mongoose.Schema;

let postSchema = new Schema({
  postId: String,
  fields:{
    post_id: String,
    createdBy: String,
    createdOn: String,
    votes: Number,
    text: String
  }
});

mongoose.model('posts', postSchema);
