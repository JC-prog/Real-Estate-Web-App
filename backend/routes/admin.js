import express from "express"

const router = express.Router();

router.get("/",  (req, res)=>{
	res.json("This is the Admin Page")
})

export default router;