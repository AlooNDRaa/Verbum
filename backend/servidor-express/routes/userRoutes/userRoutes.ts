// routes/userRoutes.ts
import express, { Router } from 'express';
import { Connection } from 'mysql2';
import { createUser, getAllUsers, loginUser } from '../../controllers/usercontroller/user.controller';
const router = Router();

export const setupUserRoutes = (db: Connection) => {
    router.use(express.json());

    router.get('/user', (req, res) => getAllUsers(db, req, res));

    router.post('/', (req, res) => createUser(db, req, res));
    
    router.post('/log', (req, res) => loginUser(db, req, res));

    return router;
};
