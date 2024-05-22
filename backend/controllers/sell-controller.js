import DbService from "../service/dbService.js";
import config from '../database/dbConfigAzure.js'

export const getPropertiesBySellerId = async (req, res) => {


    const dbService = new DbService(config);
    const { sellerId } = req.query;

    try {
        // Create an instance of DBservice

        console.log(sellerId);

        await dbService.connect();

        console.log("Get User Properties by Seller ID GET Started");

        // Query
        const query = "SELECT * FROM properties where sellerId = ?";
        const params = [sellerId];

        // Execute Query
        const results = await dbService.query(query, params);

        console.log(results);

        res.status(201).send({
           results
        });

        dbService.disconnect();
        
    } catch (err) {

        console.log(err);
        res.status(500).json({ message: "Failed to retrieve Property!" });

    } finally {

        await dbService.disconnect();

    }
};