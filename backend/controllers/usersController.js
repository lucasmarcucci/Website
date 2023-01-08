const User = require('../models/users')

exports.create = async (req, res, next) => {

    console.log(req.body)

    User.create({
        user_name: req.body.name,
        user_email: req.body.email,
        user_password: req.body.password,
        user_role: req.body.role
      })
      .then(user => res.json(user))
      .catch(error => console.log(error));

    // User.create(
    //     { user_name: req.body.name, user_email: req.body.email, user_password: req.body.password }, 
    //     { attributes: ['user_name', 'user_email', 'user_password'] }
    // )
}