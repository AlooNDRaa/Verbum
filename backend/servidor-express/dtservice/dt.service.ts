import { Connection } from 'mysql2';

export class DbService {
  private readonly db: Connection;

  constructor(db: Connection) {
    this.db = db;
  }

  query(sql: string, values?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.query(sql, values, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
}
