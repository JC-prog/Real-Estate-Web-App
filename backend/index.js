import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

// Routes
import authRoute from "./routes/auth-route.js";
import adminRoute from "./routes/admin-route.js"
import buyRoute from "./routes/buy-route.js";
import sellRoute from "./routes/sell-route.js";
import agentsRoute from "./routes/agents-route.js";
import agentRoute from "./routes/agent-route.js";
import userRoute from "./routes/user-route.js";
import propertiesRoute from "./routes/properties-route.js";
import reviewRoute from "./routes/review-route.js";

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

// Routes
app.use("/api/auth", authRoute);
app.use("/api/admin", adminRoute);
app.use("/api/buy", buyRoute);
app.use("/api/sell", sellRoute);
app.use("/api/agents", agentsRoute);
app.use("/api/agent", agentRoute);
app.use("/api/user", userRoute)
app.use("/api/properties", propertiesRoute);
app.use("/api/review", reviewRoute);

app.listen(port, ()=>{
	console.log("Connected to server!")
});