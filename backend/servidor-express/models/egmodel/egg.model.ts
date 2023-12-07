import { Connection, RowDataPacket } from 'mysql2';

let db: Connection;

export const configureDatabase2 = (connection: Connection): void => {
  db = connection;
};

export interface EasterEgg {
  password: string;
}

export const getThePassword = async (): Promise<EasterEgg | null> => {
  const sql: string = 'SELECT * FROM easter_egg LIMIT 1';
  const [rows] = await db.promise().execute(sql);

  if (Array.isArray(rows) && rows.length > 0) {
    const row = rows[0] as RowDataPacket; 
    const password = row.easterpassword as string; 
    return { password };
  } else {
    return null;
  }
};
