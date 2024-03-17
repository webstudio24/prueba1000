import  express from 'express';
import { test, updateUser,deleteUser,getUserListenings } from '../controllers/user.controller.js';
import {verifyToken} from '../utils/veirfyUser.js';


const router = express.Router();

router.get('/test', test);
router.post('/update/:id',verifyToken,updateUser)
router.delete('/delete/:id',verifyToken,deleteUser)
router.get('/listings/:id', verifyToken,getUserListenings)

export default router;