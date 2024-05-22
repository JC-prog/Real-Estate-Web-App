import DbService from "../service/dbService.js";
import config from '../database/dbConfigAzure.js';

// Table Name
const tableName = "properties";

// Get All Properties
export const listProperties = async (req, res) => {

    const dbService = new DbService(config);

    try {
        await dbService.connect();

        console.log("List Properties started");

        // Query
        const query = `SELECT * FROM ${tableName}`;
        const params = [];

        // Execute Query
        const results = await dbService.query(query, params);

        console.log(results);

        res.status(200).send({ results });

    } catch (err) {

        res.status(500).send();

    } finally {
        
        await dbService.disconnect();
      
    }
};

// Get Properties By Agent Id
export const getPropertiesByAgentId = async (req, res) => {
    // Create an instance of DBservice
    const dbService = new DbService(config);

    const { agentId } = req.query;

    try {
        await dbService.connect();

        console.log("GET Property By AgentId Started");

        // Query
        const query = `SELECT * FROM ${tableName} WHERE agentId = ?`;
        const params = [agentId];

        // Execute Query
        const results = await dbService.query(query, params);

        console.log(results);

        res.status(201).send({ results });
        
    } catch (err) {

        console.log(err);
        res.status(500).json({ message: "Failed to retrieve Property!" });

    } finally {

        await dbService.disconnect();

    }
};

// Get Properties By Keyword
export const getPropertiesByKeyword = async (req, res) => {
    // Create an instance of DBservice
    const dbService = new DbService(config);

    const { search } = req.query;

    try {
        await dbService.connect();

        console.log("GET Property By Keyword Started");

        // Query
        const query = `SELECT * FROM ${tableName} WHERE propertyName LIKE ?`;
        const params = [`%${search}%`];

        // Execute Query
        const results = await dbService.query(query, params);

        console.log(results);

        res.status(201).send({ results });
        
    } catch (err) {

        console.log(err);
        res.status(500).json({ message: "Failed to retrieve Property!" });

    } finally {

        await dbService.disconnect();

    }
};

// Get Property
export const getProperty = async (req, res) => {
    // Create an instance of DBservice
    const dbService = new DbService(config);

    const {PropertyId} = req.body;

    try {
        await dbService.connect();

        console.log("GET Property Started");

        // Query
        const query = 'SELECT * FROM ${tableName} WHERE id = ? LIMIT 1';
        const params = [propertyId];

        // Execute Query
        const results = await dbService.query(query, params);

        console.log(results);

        res.status(201).send({ results });
        
    } catch (err) {

        console.log(err);
        res.status(500).json({ message: "Failed to retrieve Property!" });

    } finally {

        await dbService.disconnect();

    }
};

// Create Property
export const createProperty = async (req, res) => {
  
    // Create an instance of DBservice
    const dbService = new DbService(config);

    try {
        await dbService.connect();

        const {Propertyname, email, password, role} = req.body;

        console.log("Create Property Started");

        // Query
        const query = '';
        const params = [];

        // Execute Query
        const results = await dbService.query(query, params);

        console.log(results);

        res.status(200).json({ message: "Create Property Successful" });

    } catch (err) {

        res.status(500).json({ message: "Create Property Fail!" });

    } finally {
    
        await dbService.disconnect();
    
    }
};

// Update Property
export const updateProperty = async (req, res) => {
    const dbService = new DbService(config);

    try {
        await dbService.connect();

        const { propertyId } = req.params;
        const { propertyName } = req.body;

        console.log("Update Property Started");

        // Query
        const query = `UPDATE ${tableName} SET Propertyname = ? WHERE propertyId = ?`;
        const params = [];

        // Execute Query
        const results = await dbService.query(query, params);

        console.log(results);

        res.status(200).json({ message: "Update Property Successful" });

    } catch (err) {

        console.error('Error updating Property:', err);
        res.status(500).json({ message: "Update Property Failed!" });

    } finally {

        await dbService.disconnect();

    }
};

// Delete Property
export const deleteProperty = async (req, res) => {
    const dbService = new DbService(config);

    try {
        await dbService.connect();
        
        const { PropertyId } = req.params;

        console.log("Delete Property Started");

        // Query
        const query = `DELETE FROM ${tableName} WHERE id = ?`;
        const params = [propertyId];

        // Execute Query
        const results = await dbService.query(query, params);

        console.log(results);

        res.status(200).json({ message: "Delete Property Successful" });

    } catch (err) {

        console.error('Error deleting Property:', err);
        res.status(500).json({ message: "Delete Property Failed!" });

    } finally {

        await dbService.disconnect();

    }
};