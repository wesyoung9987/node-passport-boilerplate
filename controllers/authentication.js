const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
  // user was put onto req in passport localLogin
  res.send({ token: tokenForUser(req.user), userData: { id: req.user.id, firstName: req.user.firstName, email: req.user.email, role: req.user.role } });
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const role = req.body.role;
  console.log(req.body);

  if (!firstName || !lastName) {
    return res.status(422).send({ error: 'First and last name are required.'});
  }

  if (!role) {
    return res.status(422).send({ error: 'User role must be specified.'} );
  }

  if (!email || !password) {
    return res.status(422).send({ error: 'Email and password required'});
  }

  User.findOne({ email: email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    const user = new User({
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      role: role
    });

    user.save(function(err) {
      if (err) {
        return next(err);
      }

      res.json({ token: tokenForUser(user), userData: { id: user.id, firstName: user.firstName, email: user.email, role: user.role } });
    });

  });

}
