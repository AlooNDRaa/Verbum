"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupUserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../../controllers/usercontroller/user.controller");
const router = express_1.default.Router();
const setupUserRoutes = (db) => {
    router.use(express_1.default.json());
    router.get('/user', (req, res) => (0, user_controller_1.getAllUsers)(db, req, res));
    router.post('/', (req, res) => (0, user_controller_1.createUser)(db, req, res));
    router.post('/login', (req, res) => (0, user_controller_1.loginUser)(db, req, res));
    return router;
};
exports.setupUserRoutes = setupUserRoutes;
