import express from "express";
import mysql from "mysql";

// Routes
import adminRoute from './routes/admin.js'
import agentRoute from './routes/agent.js'
import buyerRoute from './routes/buyer.js'
import sellerRoute from './routes/seller.js'

const port = 8080;

// Express App
const app = express();

// Database
const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "realestate"
});

app.get("/",  (req, res)=>{
	res.json("This is the landing page")
});

app.get("/home",  (req, res)=>{
	res.json("This is the Home")
});

app.use("/admin", adminRoute);
app.use("/agent", agentRoute);
app.use("/buyer", buyerRoute);
app.use("/seller", sellerRoute);

app.listen(port, ()=>{
	console.log("Connected to server!")
});