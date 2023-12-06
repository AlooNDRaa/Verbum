import { Connection, RowDataPacket } from 'mysql2';

let db: Connection;

export const configureDatabase2 = (connection: Connection): void => {
  db = connection;
};

export interface EasterEgg {
  easterpassword: string;
}

export const getThePassword = async (easterpassword: string): Promise<EasterEgg | null> => {
  const sql: string = 'SELECT * FROM easter_egg WHERE easterpassword = ?';
  const [rows] = await db.promise().execute(sql, [easterpassword]);
  if (Array.isArray(rows)) {
    return rows.length > 0 ? (rows[0] as EasterEgg) : null;
  }
  return null;
};
