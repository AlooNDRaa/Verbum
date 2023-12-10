import express, { Router, Request, Response } from 'express';
import { Connection } from 'mysql2';
import { DbService } from '../../dtservice/dt.service';
import { getGameUsers } from '../../controllers/gamecontroller/game.controller';


const routesGame: Router = express.Router();

routesGame.get('/game-users', (req: Request, res: Response) => getGameUsers(DbService, req, res));

export default routesGame;