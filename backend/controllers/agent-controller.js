import DbService from "../service/dbService.js";
import config from '../database/dbConfigAzure.js'// uncomment this to connect to azure db

// Table Name
const tableName = "users";


export const listAgents = async (req, res) => {
    // Create an instance of DBservice
    const dbService = new DbService(config);

    try {

        await dbService.connect();

        console.log("List Agents Started");

        // Query
        const query = `SELECT * FROM ${ tableName } WHERE userRole = 'Agent'`;
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

export const getAgent = async (req, res) => {
    // Create an instance of DBservice
    const dbService = new DbService(config);

    const { userId } = req.query;
    console.log(req.query.userId);

    try {

        await dbService.connect();

        console.log("GET Agents Started");

        // Query
        const query = `SELECT * FROM ${ tableName } WHERE userRole = 'Agent' AND userId = ?`;
        const params = [ userId ];

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

