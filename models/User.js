let mongoose = require('mongoose');
let {Schema} = mongoose; // let Schema = mongoose.Schema;

let userSchema = new Schema({
  googleId: String,
  googleProfile: {
    username: String,
    email: String,
    profilePic: String,
    posts: Array,
    karma: Number
  }
});

mongoose.model('users', userSchema);