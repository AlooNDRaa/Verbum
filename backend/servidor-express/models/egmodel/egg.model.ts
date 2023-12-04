import { DbService } from '../../dtservice/dt.service';

export interface EasterEgg {
  easterpassword: string;
}

export const getThePassword = async (dbService: DbService, providedPassword: string): Promise<EasterEgg | null> => {
  const sql: string = 'SELECT * FROM easter_egg WHERE easterpassword = ?';
  const results = await dbService.query(sql, [providedPassword]);

  return results.length > 0 ? results[0] as EasterEgg : null;
};
