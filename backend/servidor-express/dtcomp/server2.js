"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql2_1 = __importDefault(require("mysql2"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 3000;
let corsOptions = {
    origin: "http://localhost:5173"
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.set('view engine', 'ejs');
const db = mysql2_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'nebulosadelvelo2023',
    database: 'verbum',
});
db.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos', err);
    }
    else {
        console.log('Conexión exitosa a la base de datos');
    }
});
app.get('/user', (req, res) => {
    const { username, email, password } = req.body;
    const sql = 'SELECT * FROM USERS';
    db.query(sql, function (err, result) {
        if (err)
            throw err;
        res.send(result);
    });
});
app.post('/', (req, res) => {
    const { username, email, password } = req.body;
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, password], (err, result) => {
        if (err) {
            console.error('Error al guardar en la base de datos', err);
            res.status(500).json({ message: 'Error al registrar usuario' });
        }
        else {
            console.log('Registro exitoso');
            res.status(200).json({ message: 'Registro exitoso' });
        }
    });
});
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto http://localhost:${PORT}`);
});
