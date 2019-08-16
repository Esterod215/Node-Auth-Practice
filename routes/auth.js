const router = require('express').Router();
const Users = require('../models/Users');

router.post('/register', async (req,res) => {
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