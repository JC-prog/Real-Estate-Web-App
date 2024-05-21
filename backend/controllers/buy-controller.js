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

        console.log(results);

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
            console.log("Properties Update View Started");

            //Query
            // const query = ""
        }
        catch(err){
            console.log(err);
            res.status(500).json({ mesage: "Failed to retrieve agents!"});
        }
};