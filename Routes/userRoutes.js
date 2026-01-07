import express from 'express';
import { updateUser } from '../Controllers/userController';
import { verifyToken } from '../middleware/verifyToken';
    
const router = express.Router();

router.put("/update/:id",verifyToken, updateUser);

export default router;