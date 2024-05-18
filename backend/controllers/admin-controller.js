import DbService from "../service/dbService.js";
import config from '../database/dbConfig.js'

export const getAllUsers = async (req, res) => {
    // Create an instance of DBservice
    const dbService = new DbService(config);

    try {

        await dbService.connect();

        console.log("User GET Started");

        // Query
        const query = "SELECT id, userName, email, role, state FROM user";
        const params = [];

        // Execute Query
        const results = await dbService.query(query, params);

        console.log(results);

        res.status(201).send({
           results
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to retrieve agents!" });
    }
};