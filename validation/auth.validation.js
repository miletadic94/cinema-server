const Joi = require('@hapi/joi');

const loginValidation = data => {
    const schema = Joi.object({
        username: Joi.string()
            .min(6)
            .required(),
        password: Joi.string()
            .min(6)
            .required()
    });
    return schema.validate(data);
};

const registerValidation = data => {
    const schema = Joi.object({
        username: Joi.string()
            .min(6)
            .max(256)
            .required(),
        email: Joi.string()
            .min(6)
            .max(256)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .max(1024)
            .required(),
    })
    return schema.validate(data);
}

module.exports = {
    loginValidation,
    registerValidation
}