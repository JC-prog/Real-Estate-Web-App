import mysql from 'mysql2'

const pool = mysql.createPool({
    host:'real-estate-db.mysql.database.azure.com',
    user: 'admin314',
    password: 'Software314!',
    database: 'real_estate_platform',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
}).promise()

console.log('Database connection pool set up.');

async function getAllUserTypes(){
    const rows = await pool.query(`
    SELECT * 
    FROM user_types`)
    return rows[0]
}

async function getUserType(id){
    const rows = await pool.query(`
    SELECT * 
    FROM user_types 
    WHERE id = ?`, [id])
    return rows[0][0].type
}

const userType = await getUserType(1)
console.log(userType)

// const userTypes = await getAllUserTypes()
// console.log(userTypes)

// async function getUserTypes(id){
//     try {
//         console.log('Executing query...');
//         const rows = await pool.query(`
//         SELECT * 
//         FROM user_types 
//         WHERE id = ?`, [id])
//         console.log('Query executed.');
//         console.log('Rows:', rows[0].type);
//         if(rows.length > 0){
//             return rows[0].type;
//         } else{
//             return null;
//         }
        
//     } catch (err) {
//         console.error('Error executing query:', err);
//     } finally {
//         console.log('Closing the connection pool...');
//         pool.end();
//         console.log('Connection pool closed.');
//     }

    
 
// }
    
