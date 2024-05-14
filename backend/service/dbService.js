import mysql from 'mysql2/promise';

class DbService {
    constructor(config) {
        this.config = config;
    }

    async connect() {
        try {
            this.connection = await mysql.createConnection(this.config);
            console.log('Connected to MySQL database');
        } catch (error) {
            console.error('Error connecting to MySQL database:', error);
        }
    }

    async disconnect() {
        try {
            if (this.connection) {
                await this.connection.end();
                console.log('Disconnected from MySQL database');
            }
        } catch (error) {
            console.error('Error disconnecting from MySQL database:', error);
        }
    }

    async query(sql, params) {
        try {
            const [results] = await this.connection.execute(sql, params);
            return results;
        } catch (error) {
            console.error('Error executing query:', error);
            throw error;
        }
    }
}

export default DbService;
