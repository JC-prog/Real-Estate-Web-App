import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import DbService from "../service/dbService.js";
import config from '../database/dbConfigAzure.js'// uncomment this to connect to azure db

// Create JWT
const SECRET_KEY = "secret-key"
const maxAge = 3 * 24 * 60 * 60;
const createToken = (userId) => {

     return jwt.sign({ userId }, SECRET_KEY, {

    expiresIn: maxAge
  });
};

// Register
export const register = async (req, res) => {
  
    // Create an instance of DBservice
    const dbService = new DbService(config);

    try {
        await dbService.connect();

        const {username, email, password, role} = req.body;

        console.log("Registration Post Started");

        // Query
        const query = "SELECT * FROM users WHERE userName = ? OR userEmail = ?";
        const params = [username, email];

        // Execute Query
        const results = await dbService.query(query, params);

        console.log(results);

        if (results.length == 0) {

            const insertQuery = "INSERT INTO users (userRole, userType, userName, userDisplayName, userPassword, userEmail, userState ) VALUES (?, ?, ?, ?, ?, ?, 'Active')";

            const capsRole = role.charAt(0).toUpperCase() + role.slice(1);

            const insertParams = [capsRole, role, username, username, password, email];

            dbService.query(insertQuery, insertParams);

            console.log("Registration Successful");
            res.status(200).json({message: "Registration Successful"});

        } else {

            console.log("User already exist");
            res.status(400).json({message: "Registration Failed"});

        }

        await dbService.disconnect();

        console.log(results);
    } catch (err) {
        console.error("Error: ", err);
    }
};

// Login
export const login = async (req, res) => {
    const dbService = new DbService(config);
    const { username, password } = req.body;
  
    try {
        await dbService.connect();

        // Check for user
        const query = "SELECT * FROM users WHERE userName = ? AND userPassword = ? LIMIT 1";
        const params = [username, password];

        const results = await dbService.query(query, params);

        if (results.length > 0) {
            console.log("User Exist");

            const token = createToken(results[0].userId);
            
            console.log("token: " + token);

            // Create a JSON object with the user details
            const userJson = {
                username: username,
                role: results[0].userRole,
                token: token // Optionally include the token if needed
            };

            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(200).json(userJson);
        } else {
            console.log("No User!");
            res.status(400).json({ message: "No User!" });
        }

        await dbService.disconnect();

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to login!" });
    }
  };
  
  // Logout
  export const logout = (req, res) => {
        res.clearCookie("token").status(200).json({ message: "Logout Successful" });
  };

  // User Authentication
  export const checkAuth = (req, res) => {
        
        const token = req.query.token;

        console.log("User Authentication Started")

        if (!token) {
            return res.status(200).json({ message: 'Not authenticated' });
        }

        try {
            const decoded = jwt.verify(token, SECRET_KEY);

            res.json({ message: 'Authenticated', userId: decoded.userId });

        } catch (error) {

            res.status(401).json({ message: 'Invalid token' });

        }

  }