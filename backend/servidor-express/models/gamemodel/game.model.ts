 
import { Connection } from 'mysql2';

let db: Connection;

export const configureDatabase3 = (connection: Connection): void => {
  db = connection;
};

export interface GameUser {
  username: string;
}

export const getGameUsers = async (): Promise<GameUser[]> => {
  const sql: string = 'SELECT username FROM users';
  const [rows] = await db.promise().execute(sql);
  return rows as GameUser[];
};

export const saveMovimientos = async (board: any[], turn: string): Promise<void> => {
  const sql = 'INSERT INTO movimientos (users_id, movimiento_data) VALUES (?, ?)';
  const [result] = await db.promise().execute(sql, [1, JSON.stringify({ board, turn })]);
  console.log('Movimientos guardados en la base de datos:', result);
};
 