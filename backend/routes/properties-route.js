import express from  "express";
import { getProperties, viewProperty } from "../controllers/properties-controller.js";

const router = express.Router();

router.get("/", getProperties);
router.post("/", viewProperty);

export default router;