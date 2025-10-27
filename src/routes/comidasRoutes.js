import { Router } from "express";
import * as comidasController from './../controllers/comidasController.js';

const router = Router();

router.get("/", comidasController.listAll);
router.get("/:id", comidasController.listOne);
router.post("/", comidasController.create);
router.delete("/:id", comidasController.deletar);
router.put("/:id", comidasController.atualizar);

export default router;