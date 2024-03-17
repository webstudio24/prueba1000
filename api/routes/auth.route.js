import express from 'express';
import {google,signin, signup,signOut} from '../controllers/auth.controller.js'
const router = express.Router();

router.post("/signup",signup);//invoco al controlador
router.post("/signin",signin);//el mismo pero del signin
router.post("/google",google);
router.get('/signout',signOut);

export default router;