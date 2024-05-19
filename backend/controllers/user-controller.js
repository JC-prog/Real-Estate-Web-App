import DbService from "../service/dbService.js";
import config from '../database/dbConfig.js'

export const viewUser = async (req, res) => {
    // Create an instance of DBservice
    const dbService = new DbService(config);

    const {userId} = req.body;

    try {

        await dbService.connect();

        console.log("View User GET Started");

        console.log(req.body);

        // Query
        const query = "SELECT * FROM user WHERE id = ? LIMIT 1";
        const params = [userId];

        // Execute Query
        const results = await dbService.query(query, params);

        console.log(results);

        res.status(201).send({
           results
        });

        await dbService.disconnect();
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to retrieve Users!" });
    }
};