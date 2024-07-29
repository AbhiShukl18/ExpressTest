import { Router } from "express";
import {CreateBook} from "../Controllers/create.controller.js"


const router = Router();

router.post("/create", CreateBook);


export default router;