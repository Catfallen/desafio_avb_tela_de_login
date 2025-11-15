import { Router } from "express";
import userController from "../controller/user.controller";
import authMiddleware from "../middlewares/authMiddleware";
const router = Router();

// Rotas REST
router.get("/", userController.index);
router.post("/login", userController.login);
router.post("/",userController.create);
router.get('/private',authMiddleware,userController.index);

//router.put("/:id", userController.update);
//router.delete("/:id", userController.delete);

export default router;


