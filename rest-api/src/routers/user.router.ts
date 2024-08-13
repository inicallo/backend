import { Router } from "express";
import { createUSer, getUser, getUserId } from "../controllers/user.controller";


const userRouter = Router()

userRouter.get('/', getUser)
userRouter.get('/:id', getUserId)
userRouter.post('/', createUSer)

export {userRouter}