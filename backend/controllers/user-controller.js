import DbService from "../service/dbService.js";
import config from '../database/dbConfigAzure.js';

// Table Name
const tableName = "users";

// Get All Users
export const listUsers = async (req, res) => {

    const dbService = new DbService(config);

    try {
        console.log("List Users started");

        // Query
        const query = 'SELECT * FROM ${tableName}';
        const params = [];

        // Execute Query
        const results = await dbService.query(query, params);

        console.log(results);

        res.status(200).send({ results });

    } catch (err) {

        res.status(500).send();

    } finally {
        
        await dbService.disconnect();
      
    }
};

// Get User
export const getUser = async (req, res) => {
    // Create an instance of DBservice
    const dbService = new DbService(config);

    const {userId} = req.body;

    try {
        await dbService.connect();

        console.log("GET User Started");

        // Query
        const query = 'SELECT * FROM ${tableName} WHERE id = ? LIMIT 1';
        const params = [userId];

        // Execute Query
        const results = await dbService.query(query, params);

        console.log(results);

        res.status(201).send({ results });

        await dbService.disconnect();
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to retrieve Users!" });
    } finally {

        await dbService.disconnect();

    }
};

// Create User
export const createUser = async (req, res) => {
  
    // Create an instance of DBservice
    const dbService = new DbService(config);

    try {
        await dbService.connect();

        const {username, email, password, role} = req.body;

        console.log("Create User Started");

        // Query
        const query = 'INSERT INTO ${tableName} (username, email, password, role, state) VALUES (?, ?, ?, ?, Active)';
        const params = [username, email, password, role];

        // Execute Query
        const results = await dbService.query(query, params);

        console.log(results);

        res.status(200).json({ message: "Create User Successful" });

    } catch (err) {

        res.status(500).json({ message: "Create User Fail!" });

    } finally {
    
        await dbService.disconnect();
    
    }
};

// Update User
export const updateUser = async (req, res) => {
    const dbService = new DbService(config);

    try {
        const { userId } = req.params;
        const { username, email, password, role } = req.body;

        console.log("Update User Started");

        // Query
        const query = `UPDATE ${tableName} SET username = ?, email = ?, password = ?, role = ? WHERE id = ?`;
        const params = [username, email, password, role, userId];

        // Execute Query
        const results = await dbService.query(query, params);

        console.log(results);

        res.status(200).json({ message: "Update User Successful" });

    } catch (err) {

        console.error('Error updating user:', err);
        res.status(500).json({ message: "Update User Failed!" });

    } finally {

        await dbService.disconnect();

    }
};

// Delete User
export const deleteUser = async (req, res) => {
    const dbService = new DbService(config);

    try {
        const { userId } = req.params;

        console.log("Delete User Started");

        // Query
        const query = `DELETE FROM ${tableName} WHERE id = ?`;
        const params = [userId];

        // Execute Query
        const results = await dbService.query(query, params);

        console.log(results);

        res.status(200).json({ message: "Delete User Successful" });

    } catch (err) {

        console.error('Error deleting user:', err);
        res.status(500).json({ message: "Delete User Failed!" });

    } finally {

        await dbService.disconnect();

    }
};