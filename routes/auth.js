const router = require('express').Router();
const Users = require('../models/Users');

//validation
const joi = require('@hapi/joi')

const validationSchema = {
    name: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().min(6).required()
}

router.post('/register', async (req,res) => {

    const { error } = joi.validate(req.body, validationSchema)
    if(error){

        return res.status(400).json(error.details[0].message)
    }

    const user = new Users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    try{
        const newUser = await user.save()
        res.status(201).json(newUser);
    } catch(err) {
        res.status(400).json(err)
    }
});





module.exports = router;