import express, { response, Router } from "express";
import User from "../schema/user-schema.js";

const router = express.Router();

router.post('/add', async (req,res) => {
    const user = req.body;
    const newUser = new User(user);
    try{
        await newUser.save();
        res.status(201).json(newUser)
    }catch(error){
        res.status(409).json({message: error.message})
        console.log(error);
    }
    
})
router.get('/get', async (req,res) => {
    try{
        const users = await User.find({});
        res.status(200).json(users);

    }catch(error){
        res.status(404).json({message: error.message})

    }
})
router.get('/:id', async (req,res) => {
    try{
        const user = await User.find({_id: req.params.id});
        res.status(200).json(user);

    }catch(error){
        res.status(404).json({message: error.message})

    }
})

router.put('/:id', async (req,res) => {
    const user = req.body;
    const editUser = new User(user);
    console.log("Edituser data in server ",editUser)
    try{
        await User.updateOne({_id: req.params.id}, editUser);
        res.status(201).json(editUser)
    }catch(error){
        res.status(409).json({message: error.message})
        console.log(error);
    }
    
})
 
router.delete('/:id', async(req,res) => {
    try {
        const user  = await User.deleteOne({_id: req.params.id})
        res.status(201).json(user)
    } catch (error) {
        res.status(409).json({message: error.message})
        console.log(error);
    }
})



export default router;