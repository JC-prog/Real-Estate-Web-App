import DbService from "../service/dbService.js";
// import config from '../database/dbConfig.js'
import config from '../database/dbConfigAzure.js';

export const getProperties = async (req, res) => {
    // Create an instance of DBservice
    const dbService = new DbService(config);

    try {

        await dbService.connect();

        console.log("Properties GET Started");

        // Query
        const query = "SELECT * FROM properties";
        const params = [];

        // Execute Query
        const results = await dbService.query(query, params);

        console.log(results);

        res.status(201).send({
           results
        });

        dbService.disconnect();
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to retrieve properties!" });
    }
};

export const viewProperty = async (req, res) => {
    // Create an instance of DBservice
    const dbService = new DbService(config);

    try {

        await dbService.connect();

        console.log("Properties GET Started");

        // Query
        const query = "SELECT * FROM properties";
        const params = [];

        // Execute Query
        const results = await dbService.query(query, params);

        console.log(results);

        res.status(201).send({
           results
        });

        dbService.disconnect();
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to retrieve property!" });
    }
};
