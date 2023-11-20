"use strict";
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
const express_1 = __importDefault(require("express"));
const mysql2_1 = __importDefault(require("mysql2"));
const cors_1 = __importDefault(require("cors"));
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
const PORT = 3000;
let corsOptions = {
    origin: "http://localhost:5173"
};
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
});
app.get('/user', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, result) => {
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
app.post('/log', (req, res) => {
    const { email, password } = req.body;
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], (err, results) => {
        if (err) {
            console.error('Error en la consulta: ' + err.message);
            res.status(500).json({ message: 'Error en el servidor' });
            return;
        }
        if (Array.isArray(results) && results.length > 0) {
            const user = results[0];
            if (user.password === password) {
                res.status(200).json({ message: 'Inicio de sesión exitoso' });
            }
            else {
                res.status(401).json({ message: 'Contraseña incorrecta' });
            }
        }
        else {
            res.status(401).json({ message: 'Usuario no encontrado' });
        }
    });
});
app.post('/recover-password', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    try {
        yield sendPasswordRecoveryEmail(email, 'token-unico');
        res.send('Correo de recuperación de contraseña enviado.');
    }
    catch (error) {
        console.error('Error al enviar el correo de recuperación:', error);
        res.status(500).json({ message: 'Error al enviar el correo de recuperación' });
    }
}));
const sendPasswordRecoveryEmail = (email, token) => __awaiter(void 0, void 0, void 0, function* () {
    const sendGridApiKey = process.env.SENDGRID_API_KEY;
    const sendGridUrl = 'https://api.sendgrid.com/v3/mail/send';
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sendGridApiKey}`,
    };
    const mailOptions = {
        personalizations: [{ to: [{ email: email }] }],
        from: { email: 'tuemail@gmail.com' },
        subject: 'Recuperación de contraseña',
        content: [{ type: 'text/plain', value: `Para restablecer tu contraseña, haz clic en este enlace: https://tuaplicacion.com/reset-password/${token}` }],
    };
    try {
        yield axios_1.default.post(sendGridUrl, mailOptions, { headers });
        console.log('Correo de recuperación enviado a:', email);
    }
    catch (error) {
        throw new Error('Error al enviar el correo de recuperación: ');
    }
});
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto http://localhost:${PORT}`);
});
