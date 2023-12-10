import { DbService } from '../../dtservice/dt.service';

export interface GameUser {
  username: string;
}

export const getGameUsers = (dbService: DbService): Promise<GameUser[]> => {
  const sql: string = 'SELECT username FROM users';
  return dbService.query(sql) as Promise<GameUser[]>;
};