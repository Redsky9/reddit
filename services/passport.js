let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth20').Strategy;
let mongoose = require('mongoose');
const keys = require('../config/keys.js');

let User = mongoose.model('users');

passport.serializeUser((user, done) => {
  console.log(user.id);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    console.log(user.id);
    done(null, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: keys.googleClientId,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({googleId: profile.id}).then(existingUser => {
    if(existingUser){
      done(null, existingUser);
    }else{
      new User({googleId: profile.id})
      .save()
      .them(user => done(null, user));
    }
  });
}
));