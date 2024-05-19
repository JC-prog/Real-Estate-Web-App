import DbService from "../service/dbService.js";
//import config from '../database/dbConfig.js'
import config from '../database/dbConfigAzure.js';

export const getAllUsers = async (req, res) => {
    // Create an instance of DBservice
    const dbService = new DbService(config);

    try {

        await dbService.connect();

        console.log("User GET Started");

        // Query
        const query = "SELECT id, userName, email, role, state FROM users";
        const params = [];

        // Execute Query
        const results = await dbService.query(query, params);

        console.log(results);

        res.status(201).send({
           results
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to retrieve users!" });
    }
};

export const handleUserState = async (req, res) => {

    const dbService = new DbService(config);
    const { userId, userName } = req.body;

    try {

        await dbService.connect();

        console.log("User State Handling Started");

        // Query
        const query = "SELECT id, username, state FROM users WHERE id = ? AND username = ? LIMIT 1";
        const params = [userId, userName];

        console.log(params);

        // Execute Query
        const results = await dbService.query(query, params);

        if (results.length > 0) {
            console.log("User Exist");

            const updateQuery = "UPDATE users SET state = ? WHERE id = ?";
            var updateParams = [];


            if (results[0].state == "Active") {

                console.log(results[0].id);

                updateParams = ["Inactive", results[0].id];

            } else if(results[0].state == "Inactive") {

                updateParams = ["Active", results[0].id];
            }

            console.log(updateQuery);
            console.log(updateParams);

            await dbService.query(updateQuery, updateParams);

            console.log("User State Update Complete");

        }

        console.log(results);

        await dbService.disconnect();

        res.status(201).send({
           results
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to retrieve users!" });
    }

}

export const getAllProperties = async (req, res) => {
    // Create an instance of DBservice
    const dbService = new DbService(config);

    try {

        await dbService.connect();

        console.log("User GET Started");

        // Query
        const query = "SELECT* FROM properties";
        const params = [];

        // Execute Query
        const results = await dbService.query(query, params);

        console.log(results);

        res.status(201).send({
           results
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to retrieve properties!" });
    }
};
