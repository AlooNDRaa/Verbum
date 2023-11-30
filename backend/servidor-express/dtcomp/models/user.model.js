"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserModel = void 0;
const mysql2_1 = require("mysql2");
const db = (0, mysql2_1.createConnection)({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err.message);
        process.exit(1);
    }
    else {
        console.log('Conexión exitosa a la base de datos');
    }
});
const createUserModel = () => {
    return {
        getAllUsers: () => __awaiter(void 0, void 0, void 0, function* () {
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
        }),
        createUser: (userData) => __awaiter(void 0, void 0, void 0, function* () {
            const { username, email, password } = userData;
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
        }),
        loginUser: (email, password) => __awaiter(void 0, void 0, void 0, function* () {
            const sql = 'SELECT * FROM users WHERE email = ?';
            return new Promise((resolve, reject) => {
                db.query(sql, [email], (err, results) => {
                    if (err) {
                        reject('Error en el servidor');
                    }
                    const users = results;
                    if (users.length > 0) {
                        const user = users[0];
                        if (user.password === password) {
                            resolve('Inicio de sesión exitoso');
                        }
                        else {
                            reject('Contraseña incorrecta');
                        }
                    }
                    else {
                        reject('Usuario no encontrado');
                    }
                });
            });
        }),
    };
};
exports.createUserModel = createUserModel;
