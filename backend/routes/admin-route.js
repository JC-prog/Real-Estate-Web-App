import express from  "express";
import { getAllUsers, handleUserState } from "../controllers/admin-controller.js";

const router = express.Router();

router.get("/getUsers", getAllUsers);
router.post("/handle-user-state", handleUserState);

export default router;