import express from  "express";
import { getProperties } from "../controllers/buy-controller.js";

const router = express.Router();

router.get("/", getProperties);

export default router;