import express, { Router, Request, Response } from 'express';
import { Connection } from 'mysql2';
import { checkPassword } from '../../controllers/eegcontroller/egg.controller';

const router: Router = express.Router();

export const setupEggRoutesWithDb = (db: Connection): Router => {

  router.use(express.json());

  router.post('/password', (req: Request, res: Response) => checkPassword(req, res));

  return router;
};
