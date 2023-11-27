"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getThePassword = void 0;
const getThePassword = (db, req, res) => {
    const sql = 'SELECT * FROM easter_egg';
    db.query(sql, (err, results) => {
        if (err)
            throw err;
        res.send(results);
    });
};
exports.getThePassword = getThePassword;
