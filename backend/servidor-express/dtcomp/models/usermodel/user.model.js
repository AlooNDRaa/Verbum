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
exports.loginUser = exports.createUser = exports.getAllUsers = exports.configureDatabase = void 0;
let db;
const configureDatabase = (connection) => {
    db = connection;
};
exports.configureDatabase = configureDatabase;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const sql = 'SELECT * FROM users';
    return db.promise().execute(sql).then(([rows]) => rows);
});
exports.getAllUsers = getAllUsers;
const createUser = (username, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    const values = [username, email, password];
    try {
        yield db.promise().execute(sql, values);
        console.log('Usuario creado exitosamente.');
    }
    catch (error) {
        console.error('Error al crear usuario:', error);
        throw error;
    }
});
exports.createUser = createUser;
const loginUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
    const values = [email, password];
    return db.promise().execute(sql, values);
});
exports.loginUser = loginUser;
