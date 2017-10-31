let mongoose = require('mongoose');
let {Schema} = mongoose; // let Schema = mongoose.Schema;

let userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema);