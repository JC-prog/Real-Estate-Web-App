import express from  "express";
import { getAgents } from "../controllers/agents-controller.js";

const router = express.Router();

router.get("/", getAgents);

export default router;