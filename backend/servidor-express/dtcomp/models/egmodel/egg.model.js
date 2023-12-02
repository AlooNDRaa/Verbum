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
exports.getThePassword = void 0;
const getThePassword = (dbService, providedPassword) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = 'SELECT * FROM easter_egg WHERE easterpassword = ?';
    const results = yield dbService.query(sql, [providedPassword]);
    return results.length > 0 ? results[0] : null;
});
exports.getThePassword = getThePassword;
