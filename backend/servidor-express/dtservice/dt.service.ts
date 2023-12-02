import { Connection } from 'mysql2';

export class DbService {
  private readonly db: Connection;

  constructor(db: Connection) {
    this.db = db;
  }

  query(sql: string, values?: any[], callback?: (err: any, results?: any) => void): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.query(sql, values, (err, results) => {
        if (callback) {
          callback(err, results);
        }
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
}
