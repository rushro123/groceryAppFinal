import express, { Router } from "express"

const router=express.Router();
import {addItem,getAllItems,getFiltertems} from "../controller/ShopController.js"

router.get("/",getAllItems);
router.post("/",addItem);
router.get("/filter/:filter",getFiltertems);
export default router;