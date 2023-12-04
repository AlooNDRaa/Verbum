"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createUser = exports.getAllUsers = void 0;
const getAllUsers = (db) => {
    const sql = 'SELECT * FROM users';
    return new Promise((resolve, reject) => {
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
exports.getAllUsers = getAllUsers;
const createUser = (db, username, email, password) => {
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    return new Promise((resolve, reject) => {
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
    const sql = 'SELECT * FROM users WHERE email = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, [email], (err, results) => {
            if (err) {
                reject(err);
            }
            else {
                const users = results;
                if (users.length > 0) {
                    const user = users[0];
                    if (user.password === password) {
                        resolve('Inicio de sesión exitoso');
                    }
                    else {
                        resolve('Contraseña incorrecta');
                    }
                }
                else {
                    resolve('Usuario no encontrado');
                }
            }
        });
    });
};
exports.loginUser = loginUser;
