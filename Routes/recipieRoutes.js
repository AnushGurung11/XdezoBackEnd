import express from 'express'; 
import { getAllRecipie, createRecipie, updateRecipie } from '../Controllers/recipieController.js';

const router = express.Router();

router.get("/",getAllRecipie);
router.post("/", createRecipie); 
router.put("/:id", updateRecipie); 




export default router; 
