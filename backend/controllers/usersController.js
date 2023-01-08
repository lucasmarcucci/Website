const User = require('../models/users');

exports.create = async (req, res, next) => {
  console.log(req.body);

  User.create({
    id: req.body.id,
    user_name: req.body.name,
    user_email: req.body.email,
    user_password: req.body.password,
    user_role: req.body.role
  })
  .then(user => res.json(user))
  .catch(error => console.log(error));
}

exports.getAll = async (req, res, next) => {
  console.log(req.body);

  User.findAll()
  .then(users => res.json(users))
  .catch(error => console.log(error));
}

exports.findOne = async (req, res, next) => {
  console.log(req.params);

  User.findByPk(req.params.id)
  .then(user => res.json(user))
  .catch(error => console.log(error));
}

exports.update = async (req, res, next) => {
  console.log(req.body);
  console.log(req.params);

  User.update({
    user_name: req.body.username,
    user_email: req.body.email
  }, {
    where: {
      id: req.params.id
    }
  })
  .then(() => res.sendStatus(200))
  .catch(error => console.log(error));
}

exports.delete = async (req, res, next) => {
  console.log(req.params);

  User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => res.sendStatus(200))
  .catch(error => console.log(error));
}