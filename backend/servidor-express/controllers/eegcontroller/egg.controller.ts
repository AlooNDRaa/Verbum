import { EasterEgg } from "../../models/egmodel/egg.model";
import { Connection } from "mysql2";
import { Request, Response } from "express";



export const getThePassword = (db: Connection, req: Request, res: Response) :void =>  {
    const sql:string = 'SELECT * FROM easter_egg';
    db.query(sql, (err:Error, results:EasterEgg) => {
        if (err) throw err;
        res.send(results)
    })
}