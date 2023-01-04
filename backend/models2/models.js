const db = require('../db/db');

module.exports = {
    getAll,
    getById,
    create
};

async function getAll() {

    return await db.Models.findAll({
        attributes: ['model_id', 'model_name', 'model_description']
    });
}

async function getById(id) {

    const model = await db.Models.findByPk(id, {
        attributes: ['model_id', 'model_name', 'model_description']
    });

    if (!model) throw 'Model not found';
    return model;
}

async function create(params) {

    // if (await db.Models.findOne({ 
    //         where: { model_name: params.name } 
    //     })) {
    //     throw 'This model "' + params.name + '" already exists';
    // }

    // const model = new db.Models(params.name, params.description);
    // await model.save({ 
    //     attributes: ['model_id', 'model_name', 'model_description'] 
    // });
    const model = new db.Models(params);
    await model.create(
        { model_name: params.name, model_description: params.description }, 
        { attributes: ['model_id', 'model_name', 'model_description'] }
    );
}