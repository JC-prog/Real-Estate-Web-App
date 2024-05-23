import express from  "express";
import { getProperties, updateWatchlist ,getBuyerWatchlist } from "../controllers/buy-controller.js";

const router = express.Router();

router.get("/", getProperties);

router.post("/updateWatchlist", updateWatchlist);

router.get("/:id/viewWatchlist", getBuyerWatchlist);

export default router;