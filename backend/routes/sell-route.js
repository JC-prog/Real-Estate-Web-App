import express from  "express";

import{getPropertiesBySellerId} from "../controllers/sell-controller.js"

const router = express.Router();

router.get('/getPropertiesBySellerId', getPropertiesBySellerId);


export default router;