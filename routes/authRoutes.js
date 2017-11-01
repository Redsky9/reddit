let passport = require('passport');

const scope = {
  scope: ['profile', 'email']
};

module.exports = (app) => {

  app.get('/auth/google', passport.authenticate('google', scope));
  
  app.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/'
  }));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/', (req, res) => {
    res.render('index.ejs', {user: req.user});
  });

}
