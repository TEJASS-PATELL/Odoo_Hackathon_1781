const ConnectDB = require("../lib/db");

async function ConnectUser() {
    try {
        const connection = await ConnectDB();
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            fullname VARCHAR(255) NOT NULL,
            password VARCHAR(200) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            location VARCHAR(255),
            profilepic VARCHAR(500),
            bio TEXT,
            skillshave TEXT,
            skillswant TEXT,
            availability TEXT, 
            isPublic BOOLEAN DEFAULT TRUE, 
            createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );    
    `);
        console.log("created successfully.");
        return connection;
    } catch (err) {
        console.error("Error creating users table:", err);
    }
}

ConnectUser();

module.exports = ConnectUser;
