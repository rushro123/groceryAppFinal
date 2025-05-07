import express, { Router } from "express"

const router=express.Router();
import {addItem,updateItemById,getAllItems,deleteItemById} from "../controller/cartController.js"

router.get("/",getAllItems);
router.post("/",addItem);
router.put("/:id",updateItemById)
router.delete("/:id",deleteItemById);

export default router;