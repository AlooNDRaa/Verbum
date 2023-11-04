import mysql from 'mysql2';
import dbconfig from '../dbconfig/db.config';

export const conection = mysql.createConnection (
    {
        host: dbconfig.HOST,
        user: dbconfig.USER,
        password: dbconfig.PASSWORD,
        database: dbconfig.DB
    }
);

conection.connect(error => {
    if (error) throw error;
    console.log("Conección exitosa");
}

)

