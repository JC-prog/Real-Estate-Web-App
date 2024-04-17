import express from "express"

const router = express.Router();

router.get("/",  (req, res)=>{
	res.json("This is the Agent Page")
})

export default router;