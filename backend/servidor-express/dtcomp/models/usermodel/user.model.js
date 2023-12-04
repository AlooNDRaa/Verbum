"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createUser = exports.getAllUsers = void 0;
const getAllUsers = (dbService) => {
    const sql = 'SELECT * FROM users';
    return dbService.query(sql);
};
exports.getAllUsers = getAllUsers;
const createUser = (dbService, username, email, password) => {
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    const values = [username, email, password];
    return dbService.query(sql, values);
};
exports.createUser = createUser;
const loginUser = (dbService, email, password) => {
    const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
    const values = [email, password];
    return dbService.query(sql, values);
};
exports.loginUser = loginUser;
