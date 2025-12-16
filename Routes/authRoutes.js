import express from 'express'; 
import { registerUser } from '../Controllers/authController';

const router = express.Router(); 

router.post("/register",registerUser); 

export default router; 
