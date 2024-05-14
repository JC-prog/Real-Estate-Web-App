import express from "express";
import mysql from "mysql";
import cors from 'cors';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

// Routes
import authRoute from "./routes/auth-route.js";
import sellRoute from "./routes/sell-route.js";
import agentsRoute from "./routes/agents-route.js";

const port = 8080;

// Express App
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/",  (req, res)=>{
	res.json("This is the landing")
});

app.get("/home",  (req, res)=>{
	res.json("This is the Home")
});

app.use("/api/auth", authRoute);
app.use("/api/sell", sellRoute);
app.use("/api/agents", agentsRoute);



app.listen(port, ()=>{
	console.log("Connected to server!")
});