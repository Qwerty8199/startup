import express from 'express'
import { loginUser, registerUser } from '../controllers/UserController.js';

export const UserRouter = express.Router();

//auth
UserRouter.post('/login',loginUser);
UserRouter.post('/register',registerUser);

//follow
UserRouter.post('/follow', ()=>{});
UserRouter.delete('/follow', ()=>{})
