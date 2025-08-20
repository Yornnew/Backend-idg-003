import express from 'express';
import { createUser, deleteUserById, getAllUser, getAllUserById, updateUserById } from '../controller/user.controller.js';
import { userMiddleware, userMiddlewarePostUser } from '../middleware/index.js';


const userRoute =express.Router()

userRoute.get('/', userMiddleware, getAllUser)
///get user by Id
userRoute.get('/:userid', getAllUserById)

// Delet user by Id 
///use query formula
userRoute.delete('/', deleteUserById )

///Post User by validate Id (400)
userRoute.post('/', userMiddlewarePostUser, createUser)

//update
userRoute.patch('/:id', updateUserById)

export default userRoute;