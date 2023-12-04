"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createUser = exports.getAllUsers = void 0;
const getAllUsers = (db) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM users';
        db.query(sql, (err, results) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(results);
            }
        });
    });
};
<<<<<<< HEAD
exports.getAllUsers = getAllUsers;
const createUser = (db, username, email, password) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        db.query(sql, [username, email, password], (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
};
exports.createUser = createUser;
const loginUser = (db, email, password) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM users WHERE email = ?';
        db.query(sql, [email], (err, results) => {
            if (err) {
                reject(err);
            }
            else {
                const users = results;
                if (users.length > 0) {
                    resolve(users[0]);
                }
                else {
                    resolve(null);
                }
            }
        });
    });
};
exports.loginUser = loginUser;
=======
//encargado de la informacion, sentencias sql aqui. 
>>>>>>> 874e1781970df4587e5f6860a6f6ee544c0c45ad
