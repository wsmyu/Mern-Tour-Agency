import express from 'express'
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser } from '../controller/userController.js';
import { verifyUser,verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router()

//create new user
router.post('/',createUser);
//update user
router.put('/:id', verifyUser,updateUser);
//delete  user
router.delete('/:id',verifyUser,deleteUser);
//get single new user
router.get('/:id',verifyUser,getSingleUser);
//get all users
router.get('/',verifyAdmin,getAllUser);


export default router;