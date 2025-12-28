import express from 'express'; 
import { getAllRecipie, createRecipie, updateRecipie } from '../Controllers/recipieController.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get("/",getAllRecipie);
router.post("/",verifyToken, createRecipie); 
router.put("/:id", verifyToken, updateRecipie); 

export default router; 
