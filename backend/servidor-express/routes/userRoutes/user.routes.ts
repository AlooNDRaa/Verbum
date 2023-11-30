import express, { Router, Request, Response } from 'express';
import { createUser, getAllUsers, loginUser } from '../../controllers/usercontroller/user.controller';

const router: Router = Router();

export const setupUserRoutes = (): Router => {
    router.use(express.json());

    router.get('/user', (req: Request, res: Response)=> getAllUsers( req, res));
    router.post('/', (req: Request, res: Response)=> createUser( req, res));
    router.post('/login', (req: Request, res: Response)=> loginUser(req, res));

    return router;
};