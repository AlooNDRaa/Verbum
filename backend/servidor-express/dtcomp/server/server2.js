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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const egg_route_1 = require("../routes/eggroutes/egg.route");
const user_routes_1 = require("../routes/userRoutes/user.routes");
const chat_routes_1 = __importDefault(require("../routes/userRoutes/chat.routes"));
const express_1 = __importStar(require("express"));
const socket_io_1 = require("socket.io");
const mysql2_1 = __importDefault(require("mysql2"));
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const database_1 = __importDefault(require("../config/database"));
const chat_controller_1 = require("../controllers/chat.controller");
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: 'http://localhost:5173',
    },
});
const corsOptions = {
    origin: "http://localhost:5173"
};
app.use((0, express_1.urlencoded)({ extended: true }));
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.set('view engine', 'ejs');
dotenv_1.default.config();
let gameState = {
    history: [{ squares: Array(9).fill(null) }],
    stepNumber: 0,
    xIsNext: true,
};
io.on("connection", (socket) => {
    console.log("client connected");
    socket.emit('gameState', gameState);
    socket.on('move', ({ squares }) => {
        gameState = {
            history: [...gameState.history, { squares }],
            stepNumber: gameState.history.length,
            xIsNext: !gameState.xIsNext,
        };
        io.emit('gameState', gameState);
    });
    socket.on('chat', (data) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(data);
        try {
            const nuevoMensaje = yield (0, chat_controller_1.createMessagesHandler)({ message_content: data.body, user_id: data.user_id });
            // Emitir el mensaje a todos los clientes conectados
            io.emit('chat', {
                user_id: nuevoMensaje.user_id,
                message_content: nuevoMensaje.message_content,
            });
        }
        catch (error) {
            console.error('Error al guardar el mensaje en la base de datos a través de Socket.IO:', error);
        }
    }));
});
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
});
database_1.default.sync().then(() => {
    console.log('Base de datos conectada arlu');
});
app.get('/user', (0, user_routes_1.setupUserRoutes)(db));
app.post('/login', (0, user_routes_1.setupUserRoutes)(db));
app.post('/', (0, user_routes_1.setupUserRoutes)(db));
app.post('/password', (0, egg_route_1.setupEggRoutesWithDb)(db));
app.post('/messages', chat_routes_1.default);
server.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto http://localhost:${PORT}`);
});
