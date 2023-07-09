import express from 'express';
import { UserController } from '../controllers/user.controller';
const userRouter = express.Router();

userRouter.route('/login').post(
    (req, res) => new UserController().login(req, res)
)
userRouter.route('/register').post(
    (req, res)=>new UserController().register(req, res)
)
userRouter.route('/update').post( 
    (req, res)=>new UserController().update(req, res)
)
userRouter.route('/addObject').post( 
    (req, res)=>new UserController().addObject(req, res)
)
userRouter.route('/getObjects').post( 
    (req, res)=>new UserController().getObjects(req, res)
)
userRouter.route('/getSveAgencije').post( 
    (req, res)=>new UserController().getSveAgencije(req, res)
)
userRouter.route('/addComment').post( 
    (req, res)=>new UserController().addComment(req, res)
)
userRouter.route('/getComments').post( 
    (req, res)=>new UserController().getComments(req, res)
)
userRouter.route('/changePassword').post( 
    (req, res)=>new UserController().changePassword(req, res)
)
userRouter.route('/addPosao').post( 
    (req, res)=>new UserController().addPosao(req, res)
)
userRouter.route('/getPoslove').post( 
    (req, res)=>new UserController().getPoslove(req, res)
)
userRouter.route('/getObjectbyID').post( 
    (req, res)=>new UserController().getObjectbyID(req, res)
)
userRouter.route('/updatePosao').post( 
    (req, res)=>new UserController().updatePosao(req, res)
)
export default userRouter;