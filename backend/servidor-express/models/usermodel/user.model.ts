import { DbService } from '../../dtservice/dt.service';

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export const getAllUsers = (dbService: DbService): Promise<User[]> => {
  const sql: string = 'SELECT * FROM users';
  return dbService.query(sql) as Promise<User[]>;
};

export const createUser = (dbService: DbService, username: string, email: string, password: string): Promise<void> => {
  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  const values = [username, email, password];
  return dbService.query(sql, values) as Promise<void>;
};

export const loginUser = (dbService: DbService, email: string, password: string): Promise<User | null> => {
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  const values = [email, password];
  return dbService.query(sql, values) as Promise<User | null>;
};
