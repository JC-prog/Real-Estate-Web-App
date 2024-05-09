import express from "express"
import mysql from "mysql";
import bodyParser from 'body-parser';

const router = express.Router();

// create application/json parser
var jsonParser = bodyParser.json()

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "realestate"
});

router.get("/", (req, res)=>{
	res.json("This is the login Page")
})

router.post("/", jsonParser, (req, res) => {
    const sql = "SELECT * FROM users WHERE username = ? AND password = ?";

    console.log(req.body);

    db.query(sql, [req.body.username, req.body.password ], (err, data) => {
        
        console.log(data);
        
        if (err) {
            console.log(err);
            return res.json("Error");
        }

        return res.json("Success");
    })
})

export default router;