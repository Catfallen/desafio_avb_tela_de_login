import { Router } from "express";
import userController from "../controller/user.controller";

const router = Router();

// Rotas REST
router.get("/", userController.index);
//router.get("/:id", userController.show);
//router.post("/", userController.create);
//router.put("/:id", userController.update);
//router.delete("/:id", userController.delete);

export default router;


