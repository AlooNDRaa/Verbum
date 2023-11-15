"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const express_1 = __importDefault(require("express"));
const mysql2_1 = __importDefault(require("mysql2"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 3000;
let corsOptions = {
    origin: "http://localhost:5173"
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.set('view engine', 'ejs');
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
    const { username, email, password } = req.body;
    const sql = 'SELECT * FROM users';
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
const transporter = nodemailer_1.default.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
app.post('/recover-password', (req, res) => {
    const email = req.body.email;
    sendPasswordRecoveryEmail(email, 'token-unico');
    res.send('Correo de recuperación de contraseña enviado.');
});
const sendPasswordRecoveryEmail = (email, token) => {
    const mailOptions = {
        from: 'tuemail@gmail.com',
        to: email,
        subject: 'Recuperación de contraseña',
        text: `Para restablecer tu contraseña, haz clic en este enlace: https://tuaplicacion.com/reset-password/${token}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Correo enviado: ' + info.response);
        }
    });
};
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto http://localhost:${PORT}`);
});
