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
const socket_io_1 = require("socket.io");
const express_1 = __importStar(require("express"));
const mysql2_1 = __importDefault(require("mysql2"));
const console_1 = __importDefault(require("console"));
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = require("../routes/userRoutes/user.routes");
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
app.use((0, express_1.urlencoded)({ extended: false }));
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.set('view engine', 'ejs');
dotenv_1.default.config();
io.on("connection", (socket) => {
    console_1.default.log("client connected");
    socket.on('chat', (body) => {
        console.log(body);
        console.log(body);
        socket.broadcast.emit("chat", {
            body: body,
            from: socket.id.slice(6)
        });
        console_1.default.log(socket.id);
    });
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
app.get('/user', (0, user_routes_1.setupUserRoutes)(db));
app.post('/login', (0, user_routes_1.setupUserRoutes)(db));
app.post('/', (0, user_routes_1.setupUserRoutes)(db));
server.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto http://localhost:${PORT}`);
});
