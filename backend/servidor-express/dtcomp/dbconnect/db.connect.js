"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDbConnection = void 0;
const mysql2_1 = require("mysql2");
const createDbConnection = () => {
    const dbConfig = {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    };
    return (0, mysql2_1.createConnection)(dbConfig);
};
exports.createDbConnection = createDbConnection;
