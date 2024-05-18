import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import DbService from "../service/dbService.js";
import config from '../database/dbConfig.js'

// Create JWT
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'net ninja secret', {
    expiresIn: maxAge
  });
};


export const register = async (req, res) => {
  
    // Create an instance of DBservice
    const dbService = new DbService(config);

    try {
        await dbService.connect();

        const {username, email, password, role} = req.body;

        console.log("Registration Post Started");

        // Query
        const query = "SELECT * FROM user WHERE username = ? OR email = ?";
        const params = [username, email];

        // Execute Query
        const results = await dbService.query(query, params);

        console.log(results);

        if (results.length == 0) {
            const insertQuery = "INSERT INTO user (username, email, password, role) VALUES (?, ?, ?, ?)";
            const insertParams = [username, email, password, role];

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
};

export const login = async (req, res) => {
    const dbService = new DbService(config);
    const { username, password } = req.body;
  
    try {
        await dbService.connect();

        // Check for user
        const query = "SELECT * FROM user WHERE username = ? AND password = ? LIMIT 1";
        const params = [username, password];

        const results = await dbService.query(query, params);

        if (results.length > 0) {
            console.log("User Exist");

            const token = createToken(results.id);
            console.log("token" + token);
            console.log(results[0].role);
            // Create a JSON object with the user details
            const userJson = {
                username: username,
                role: results[0].role,
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
  
  export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({ message: "Logout Successful" });
  };