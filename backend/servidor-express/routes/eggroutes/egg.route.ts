import express, { Router } from 'express';
import { Connection } from 'mysql2';
import { getThePassword } from '../../controllers/eegcontroller/egg.controller';
import { DbService } from '../../dtservice/dt.service';

const router: Router = express.Router();

export const setupEggRoutesWithDb = (db: Connection): Router => {
  const dbService = new DbService(db);

  router.use(express.json());

  router.post('/password', (req, res) => getThePassword(dbService, req, res));

  return router;
};
