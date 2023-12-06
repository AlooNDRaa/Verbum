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
exports.getThePassword = exports.configureDatabase2 = void 0;
let db;
const configureDatabase2 = (connection) => {
    db = connection;
};
exports.configureDatabase2 = configureDatabase2;
const getThePassword = (easterpassword) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = 'SELECT * FROM easter_egg WHERE easterpassword = ?';
    const [rows] = yield db.promise().execute(sql, [easterpassword]);
    if (Array.isArray(rows)) {
        return rows.length > 0 ? rows[0] : null;
    }
    return null;
});
exports.getThePassword = getThePassword;
