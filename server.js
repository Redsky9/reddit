let express = require('express');
let mongoose = require('mongoose');
let bP = require('body-parser');
let cookieSession = require('cookie-session');
let passport = require('passport');
let bluebird = require('bluebird');
const PORT = process.env.PORT || 5000;
let app = express();
let keys = require('./config/keys');

mongoose.Promise = bluebird;
mongoose.connect(keys.mongoURI);

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

require('./models/User');
require('./models/Post');
require('./services/passport');
require('./routes/authRoutes')(app);

// CONFIG
app.set('view engine', 'ejs');
app.use(bP.urlencoded({extended: true}));
app.use(express.static('public'));



// ROUTES


// LISTEN
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});