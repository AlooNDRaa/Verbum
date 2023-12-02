import { Connection } from 'mysql2';

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export const getAllUsers = (db: Connection): Promise<User[]> => {
  return new Promise((resolve, reject) => {
    const sql: string = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results as User[]);
      }
    });
  });
};

export const createUser = (db: Connection, username: string, email: string, password: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, password], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export const loginUser = (db: Connection, email: string, password: string): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], (err, results) => {
      if (err) {
        reject(err);
      } else {
        const users: User[] = results as User[];
        if (users.length > 0) {
          resolve(users[0]);
        } else {
          resolve(null);
        }
      }
    });
  });
};
