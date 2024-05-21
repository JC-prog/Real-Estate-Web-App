import express from  "express";
import { getProperties, updateWatchlist } from "../controllers/buy-controller.js";

const router = express.Router();

router.get("/", getProperties);

router.post("/updateWatchlist", updateWatchlist());

export default router;