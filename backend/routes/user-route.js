import express from  "express";
import { viewUser } from "../controllers/user-controller.js";

const router = express.Router();

router.post("/:userId", viewUser);

export default router;