import { DbService } from '../../dtservice/dt.service';

export interface EasterEgg {
  easterpassword: string;
}

export const getThePassword = async (dbService: DbService): Promise<EasterEgg[]> => {
  const sql: string = 'SELECT * FROM easter_egg';
  const results = await dbService.query(sql);
  return results as EasterEgg[];
};
