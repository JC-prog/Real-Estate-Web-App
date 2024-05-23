import DbService from "../service/dbService.js";
import config from '../database/dbConfigAzure.js'// uncomment this to connect to azure db

// Table Name
const tableName = "reviews";

// Add Agent Review
export const createReview = async (req, res) => {
    const dbService = new DbService(config);

    console.log(req.body);

    try {
        await dbService.connect();

        const { agentId, rating, review } = req.body;

        console.log("Create Review Started");

         // Get the current date and time
        const currentDateTime = new Date();

        // Query
        const query = `INSERT INTO ${tableName} (userId, rating, comment, dateSubmitted) VALUES (?, ?, ?, ?)`;
        const params = [agentId, rating, review, currentDateTime];

        // Execute Query
        const results = await dbService.query(query, params);

        console.log(results);

        res.status(200).json({ message: "Create Review Successful" });

    } catch (err) {

        res.status(500).json({ message: "Create Review Fail!" });

    } finally {
    
        await dbService.disconnect();
    
    }
}