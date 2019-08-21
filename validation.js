const joi = require('@hapi/joi')

const validationSchema = {
    name: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().min(6).required()
}


module.exports.validationSchema = validationSchema;