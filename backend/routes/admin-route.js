import express from  "express";
import { getAllUsers, handleUserState, getAllProperties } from "../controllers/admin-controller.js";

const router = express.Router();

router.get("/getUsers", getAllUsers);
router.post("/handle-user-state", handleUserState);
router.get("/getProperties", getAllProperties);

export default router;