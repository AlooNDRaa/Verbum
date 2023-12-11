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
exports.saveMovimientos = exports.getGameUsers = exports.configureDatabase3 = void 0;
let db;
const configureDatabase3 = (connection) => {
    db = connection;
};
exports.configureDatabase3 = configureDatabase3;
const getGameUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const sql = 'SELECT username FROM users';
    const [rows] = yield db.promise().execute(sql);
    return rows;
});
exports.getGameUsers = getGameUsers;
const saveMovimientos = (board, turn) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = 'INSERT INTO movimientos (users_id, movimiento_data) VALUES (?, ?)';
    const [result] = yield db.promise().execute(sql, [1, JSON.stringify({ board, turn })]);
    console.log('Movimientos guardados en la base de datos:', result);
});
exports.saveMovimientos = saveMovimientos;
