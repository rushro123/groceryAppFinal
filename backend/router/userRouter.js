import express from 'express';
const router=express.Router();
// import userContoller from '../controller/userController.js'
import { register,login,logout } from '../controller/userController.js';
import auth from '../middleware/auth.js';

router.post('/register',register);
router.post('/login',login);
router.post('/logout',logout);
export default router;