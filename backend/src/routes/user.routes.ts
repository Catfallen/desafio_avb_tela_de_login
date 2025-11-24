import { Router } from "express";
import userController from "../controller/user.controller";
import authMiddleware from "../middlewares/authMiddleware";
const router = Router();

// Rotas REST
router.post("/login", userController.login);
router.post("/register",userController.register);

router.get('/private',authMiddleware,userController.index);

//router.put("/:id", userController.update);
//router.delete("/:id", userController.delete);

export default router;


