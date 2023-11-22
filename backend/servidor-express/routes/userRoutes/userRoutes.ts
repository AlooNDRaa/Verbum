// routes/userRoutes.ts
import express, { Router } from 'express';
import { Connection } from 'mysql2';
import { createUser, getAllUsers, loginUser } from '../../controllers/usercontroller/userController';
const router = Router();

export const setupUserRoutes = (db: Connection) => {
    router.use(express.json());

    router.get('/', (req, res) => getAllUsers(db, req, res));
    router.post('/', (req, res) => createUser(db, req, res));
    router.post('/login', (req, res) => loginUser(db, req, res));

    return router;
};
