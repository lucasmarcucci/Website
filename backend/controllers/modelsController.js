// const model = require('../models2/models')

// exports.findAll = async (req, res, next) => {
//     model.getAll()
//         .then(models => res.json(models))
//         .catch(next);
//     // res.send("Find All")
// }

// exports.create = async (req, res, next) => {

//     // console.log(req)

//     // model.create(req)
//         // .then(() => res.json({ message: 'Model created' }))
//         // .then(() => console.log(res))
//         // .catch(next);

//     // Validate request
//     // if (!req.body) {
//     //     res.status(400).send({
//     //     message: "Content can not be empty!"
//     //     });
//     // }

//     // console.log(req.body)

//     // const model = {
//     //     description: "The model",
//     //     name: req.body.name,
//     //     price: req.body.price
//     // };

//     // res.send(model)
// }

// exports.update = async (req, res, next) => {
//     res.send("Update")
// }

// exports.findOne = async (req, res, next) => {
//     model.getById(req.params.id)
//         .then(model => res.json(model))
//         .catch(next);
//     // res.send("Find One")
// }

// exports.delete = async (req, res, next) => {
//     res.send("Delete")
// }