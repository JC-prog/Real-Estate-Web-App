import DbService from "../service/dbService.js";
import config from '../database/dbConfigAzure.js'
// import config from '../database/dbConfigAzure.js'// uncomment this to connect to azure db

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

        // console.log(results);

        res.status(201).send({
           results
        });

        dbService.disconnect();
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to retrieve agents!" });
    }
};

export const updateWatchlist = async (req, res) => {
        
    // Create an instance of DBservice
    const dbService = new DbService(config);
        
    try {

        await dbService.connect();

        console.log("Update watchlist Started");

        const {propertyId, userId } = req.body;
        
        // Query
        // const query = "SELECT id, username, state FROM users WHERE id = ? AND username = ? LIMIT 1";
        const query = "INSERT INTO shortlists (propertyId, userId) VALUES (?, ?) ON DUPLICATE KEY UPDATE propertyId=propertyId";
        const params = [propertyId, userId];

        console.log(params);

        // Execute Query
        const results = await dbService.query(query, params);

        if (results.length > 0) {

            console.log("Update shortlist complete");

        }

        console.log(results);

        await dbService.disconnect();

        res.status(201).send({
            results
        });
        
    } catch (err) {
        
        console.log(err);
        res.status(500).json({ message: "Failed to update shortlist" });
    }
};

export const getBuyerWatchlist = async (req, res) => {
        
    // Create an instance of DBservice
    const dbService = new DbService(config);
        
    try {

        await dbService.connect();

        console.log("View watchlist Started");
        const { buyerId } = req.query;

        // Query
        // const query = "SELECT id, username, state FROM users WHERE id = ? AND username = ? LIMIT 1";
        const query = "SELECT p.* FROM properties p JOIN shortlists s ON p.propertyId = s.propertyId WHERE s.userId = ?";
        const params = [buyerId];

        console.log("params is",params);

        // Execute Query
        const results = await dbService.query(query, params);

        // console.log(results);

        await dbService.disconnect();

        res.status(201).send({
            results
        });
        
    } catch (err) {
        
        console.log(err);
        res.status(500).json({ message: "Failed to retrieve any views" });
    }
};