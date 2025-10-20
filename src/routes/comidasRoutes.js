import { Router } from "express";
import * as comidasController from './../controllers/comidasController.js';

const router = Router();

router.get("/", comidasController.listAll);
router.get("/:id", comidasController.listOne);

export default router;