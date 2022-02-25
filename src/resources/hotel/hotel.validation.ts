import Joi from "joi";

export const createValidation = Joi.object({
    name:Joi.string().required(),
    starts:Joi.number(),
    location:Joi.string().required(),
});

export const updateValidation = Joi.object({
    name:Joi.string(),
    starts:Joi.number(),
    location:Joi.string(),
});