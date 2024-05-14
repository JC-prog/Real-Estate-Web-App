import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import DbService from "../service/dbService.js";
import config from '../database/dbConfig.js'

export const register = async (req, res) => {
  
    // Create an instance of DBservice
    const dbService = new DbService(config);

    try {
        await dbService.connect();

        const {username, email, password} = req.body;

        console.log("Registration Post Started");

        // Query
        const query = "SELECT * FROM user WHERE username = ? OR email = ?";
        const params = [username, email];

        // Execute Query
        const results = await dbService.query(query, params);

        console.log(results);

        if (results.length == 0) {
            const insertQuery = "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";
            const insertParams = [username, email, password];

            dbService.query(insertQuery, insertParams);

            console.log("Registration Successful");
            res.status(200).json({mesage: "Registration Successful"});
        } else {
            console.log("User already exist");
            res.status(400).json({message: "Registration Failed"});
        }

        await dbService.disconnect();

        console.log(results);
    } catch (err) {
        console.error("Error: ", err);
    }
    /*
    console.log(req.body);
    
    const {username, email, password } = req.body;

    try {
      // Hash Password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
        const query = "SELECT * from user";
        const result = dbService.query(query);
        
        console.log(result);
        
        
      res.status(201).json({message: "User created successfully"});

    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Failed to create user!"})
    } */
};

export const login = async (req, res) => {
    const dbService = new DbService(config);
    const { username, password } = req.body;
  
    try {
        await dbService.connect();

        // Check for user
        const query = "SELECT 1 FROM user WHERE username = ? AND password = ? ";
        const params = [username, password];

        const results = await dbService.query(query, params);

        if (results.length > 0) {
            console.log("User Exist");
            res.status(200).json({ message: "User Exist"});
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
  
  export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({ message: "Logout Successful" });
  };