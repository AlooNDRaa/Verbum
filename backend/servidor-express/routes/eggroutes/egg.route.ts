import express, { Router, Request, Response } from 'express';
import { Connection } from 'mysql2';
import { getThePassword } from '../../controllers/eegcontroller/egg.controller';

const router: Router = Router();

export const setUpPassword = (db: Connection): Router => {
    router.use(express.json());

    router.get('/secretpass', (req: Request, res: Response): void => getThePassword(db, req, res));

    return router;
};