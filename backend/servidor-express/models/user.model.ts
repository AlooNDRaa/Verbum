import { Connection } from 'mysql2';

export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}

export const getAllUsers = (db: Connection): Promise<User[]> => {
    const sql: string = 'SELECT * FROM users';
    return new Promise((resolve, reject) => {
        db.query(sql, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

export const createUser = (db: Connection, user: User): Promise<void> => {
    const { username, email, password } = user;
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    return new Promise((resolve, reject) => {
        db.query(sql, [username, email, password], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};

export const getUserByEmail = (db: Connection, email: string): Promise<User | null> => {
    const sql = 'SELECT * FROM users WHERE email = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, [email], (err, results) => {
            if (err) {
                reject(err);
            } else {
                if (Array.isArray(results) && results.length > 0) {
                    resolve(results[0] as User);
                } else {
                    resolve(null);
                }
            }
        });
    });
};
