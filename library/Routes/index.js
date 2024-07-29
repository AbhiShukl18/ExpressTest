import { Router } from "express";
import CreateBookRoutes from "./createbook.routes.js";



const router = Router();

router.use("/create", CreateBookRoutes);


export default router;