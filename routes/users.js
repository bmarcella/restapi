import express from 'express';
import { UserServiceImp } from '../services/users/UserServiceImp.js';

const router = express.Router();

const userService = UserServiceImp.builder();

router.get("/", (req, res)=>{

   res.send(userService.all());

});

router.post("/", (req, res)=>{
    let data = req.body;
    res.send(userService.add(data));
});

router.patch("/", (req, res)=>{
    res.send("patch");
});

router.delete("/", (req, res)=>{
    res.send("delete");
});
export default router;
