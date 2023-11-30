import { Connection } from 'mysql2';
export interface User {
    username: string;
    email: string;
    password: string;
  }
      

interface UserModel {
    getAllUsers: () => Promise<User[]>;
    createUser: (userData: User) => Promise<void>;
    loginUser: (email: string, password: string) => Promise<string>;
}

export const createUserModel = (db: Connection): UserModel => {
    return {
        getAllUsers: async () => {
            const sql: string = 'SELECT * FROM users';

            return new Promise((resolve, reject) => {
                db.query(sql, (err: Error, results: User[]) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                });
            });
        },

        createUser: async (userData: User) => {
            const { username, email, password } = userData;
            const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';

            return new Promise((resolve, reject) => {
                db.query(sql, [username, email, password], (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
        },

        loginUser: async (email: string, password: string) => {
            const sql = 'SELECT * FROM users WHERE email = ?';

            return new Promise((resolve, reject) => {
                db.query(sql, [email], (err, results) => {
                    if (err) {
                        reject('Error en el servidor');
                    }

                    const users: User[] = results as User[];

                    if (users.length > 0) {
                        const user = users[0];
                        if (user.password === password) {
                            resolve('Inicio de sesión exitoso');
                        } else {
                            reject('Contraseña incorrecta');
                        }
                    } else {
                        reject('Usuario no encontrado');
                    }
                });
            });
        },
    };
};
