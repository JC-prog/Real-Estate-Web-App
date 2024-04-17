import express from "express"

const router = express.Router();

router.get("/",  (req, res)=>{
	res.json("This is the Seller Page")
})

export default router;