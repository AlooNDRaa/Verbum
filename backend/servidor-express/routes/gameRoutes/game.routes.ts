import express, { Router, Request, Response } from 'express';
import { getGameUsers } from '../../controllers/gamecontroller/game.controller';
import { saveMovimientos } from '../../controllers/gamecontroller/game.controller';

const router: Router = express.Router();

router.use(express.json());

router.get('/game-users', (req: Request, res: Response) => getGameUsers(req, res));

router.post('/movimientos',(req: Request, res: Response) => saveMovimientos(req, res));



export default router;