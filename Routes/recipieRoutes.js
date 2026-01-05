import express from 'express'; 
import { getAllRecipes,deleteRecipe,updateRecipe,createRecipe } from '../Controllers/recipieController.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get("/",getAllRecipes);
router.post("/",verifyToken, createRecipe); 
router.put("/:id", verifyToken, updateRecipe); 
router.delete("/:id", verifyToken, deleteRecipe);

export default router; 
