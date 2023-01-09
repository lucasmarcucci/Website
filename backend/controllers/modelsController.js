const Model = require('../models/models');

exports.create = async (req, res, next) => {
  console.log(req.body);

  Model.create({
    id: req.body.id,
    model_name: req.body.name,
    model_description: req.body.description,
  })
  .then(model => res.json(model))
  .catch(error => console.log(error));
}

exports.getAll = async (req, res, next) => {
  console.log(req.body);

  Model.findAll()
  .then(models => res.json(models))
  .catch(error => console.log(error));
}

exports.findOne = async (req, res, next) => {
  console.log(req.params);

  Model.findByPk(req.params.id)
  .then(model => res.json(model))
  .catch(error => console.log(error));
}

exports.update = async (req, res, next) => {
  console.log(req.body);
  console.log(req.params);

  Model.update({
    model_name: req.body.name,
    model_description: req.body.description
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

  Model.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => res.sendStatus(200))
  .catch(error => console.log(error));
}