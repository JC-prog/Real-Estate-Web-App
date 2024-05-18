import express from  "express";
import { getAllUsers } from "../controllers/admin-controller.js";

const router = express.Router();

router.get("/getUsers", getAllUsers);

export default router;