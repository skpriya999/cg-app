import express from "express";
const router = express.Router();
import { login, create } from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(create);
router.route("/login").post(login);

export default router;
