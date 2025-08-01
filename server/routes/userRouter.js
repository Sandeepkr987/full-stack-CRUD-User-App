const express = require('express');
const router = express.Router();
const User = require('../models/users')


//get all
router.get('/', async(req, res) => {
    const Users = await User.find()
    res.json(Users)
})
//get byid
router.get('/:id', async(req, res) => {
    const id = req.params.id
    const Users = await User.findById(id)
    res.json(Users)
})
//create
router.post('/', async (req, res) => {
const user = new User(req.body);
const newUser = await user.save(); 
  //  const newUser = await User.create(req.body)
    res.json(newUser);
})
//update
router.put('/:id', async(req, res) => {
    const id = req.params.id
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {new: true})
    res.json(updatedUser);
})
//deletebyid
router.delete('/:id', async(req, res) => {
        const id = req.params.id
    await User.findByIdAndDelete(id)
    res.json({message: 'user deletde'})
})
//const result = await User.deleteMany({ age: { $lt: 30 } });


module.exports = router;