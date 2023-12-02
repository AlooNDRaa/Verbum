"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbService = void 0;
class DbService {
    constructor(db) {
        this.db = db;
    }
    query(sql, values, callback) {
        return new Promise((resolve, reject) => {
            this.db.query(sql, values, (err, results) => {
                if (callback) {
                    callback(err, results);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    }
}
exports.DbService = DbService;
