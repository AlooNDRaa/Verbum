"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_routes_1 = require("../routes/userRoutes/user.routes");
const chat_routes_1 = __importDefault(require("../routes/userRoutes/chat.routes"));
const express_1 = __importStar(require("express"));
const egg_route_1 = require("../routes/eggroutes/egg.route");
const user_model_1 = require("../models/usermodel/user.model");
const egg_model_1 = require("../models/egmodel/egg.model");
//import { Server as SocketServer, Socket } from 'socket.io';
const socket_mannage_1 = require("../socketConnection/socket.mannage");
const game_model_1 = require("../models/gamemodel/game.model");
const mysql2_1 = __importDefault(require("mysql2"));
const database_1 = __importDefault(require("../config/database"));
// import Console from 'console';
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const game_routes_1 = __importDefault(require("../routes/gameRoutes/game.routes"));
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = (0, socket_mannage_1.configureSocket)(server);
const corsOptions = {
    origin: "http://localhost:5173"
};
app.use((0, express_1.urlencoded)({ extended: true }));
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.set('view engine', 'ejs');
dotenv_1.default.config();
const db = mysql2_1.default.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
db.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos', err);
    }
    else {
        console.log('Conexión exitosa a la base de datos');
    }
    (0, user_model_1.configureDatabase)(db);
    (0, egg_model_1.configureDatabase2)(db);
    (0, game_model_1.configureDatabase3)(db);
});
database_1.default.sync().then(() => {
    console.log('Base de datos conectada arlu');
});
app.get('/user', (0, user_routes_1.setupUserRoutes)(db));
app.post('/login', (0, user_routes_1.setupUserRoutes)(db));
app.post('/newuser', (0, user_routes_1.setupUserRoutes)(db));
app.post('/password', (0, egg_route_1.setupEggRoutesWithDb)(db));
app.post('/mensajes', chat_routes_1.default);
app.get('/userchat', chat_routes_1.default);
app.get('/game-users', game_routes_1.default);
app.post('/movimientos', game_routes_1.default);
server.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto http://localhost:${PORT}`);
});
