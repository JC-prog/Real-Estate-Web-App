import DbService from "../service/dbService.js";
import config from '../database/dbConfig.js'
// import config from '../database/dbConfigAzure.js'// uncomment this to connect to azure db

export const getAgents = async (req, res) => {
    // Create an instance of DBservice
    const dbService = new DbService(config);

    try {

        await dbService.connect();

        console.log("Agent GET Started");

        // Query
        const query = "SELECT * FROM agents";
        const params = [];

        // Execute Query
        const results = await dbService.query(query, params);

        console.log(results);

        res.status(201).send({
           results
        });

        await dbService.disconnect();
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to retrieve agents!" });
    }
};