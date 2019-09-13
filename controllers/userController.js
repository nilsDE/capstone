const userQueries = require("../db/queries.users.js");
const passport = require("passport");

module.exports = {
  create(req, res, next) {
    let newUser = {
      email: req.body.email,
      password: req.body.password
    };
    userQueries.createUser(newUser, (err, user) => {
      if (err) {
        req.flash("error", err);
        res.redirect("/users/signup");
      } else {
        passport.authenticate("local")(req, res, () => {
          res.send('ok')
          // req.flash("notice", "You've successfully signed up for the app! Log in right now:");
        })
      }
    });
  },
  signIn(req, res, next){
    passport.authenticate("local")(req, res, function () {
      if(!req.user){
        res.redirect("/users/login");
      } else {
        res.send('ok')
      }
    })
  },
  signOut(req, res, next) {
    req.logout();
    res.send('ok')
  },
};