let passport = require('passport');

const scope = {
  scope: ['profile', 'email']
};

module.exports = (app) => {

  app.get('/auth/google', passport.authenticate('google', scope));
  
  app.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/api/current_user',
    failureRedirect: '/fail'
  }));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

}
