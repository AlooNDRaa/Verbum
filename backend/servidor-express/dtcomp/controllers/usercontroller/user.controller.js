"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretPassword = exports.loginUser = exports.createUser = exports.getAllUsers = void 0;
const getAllUsers = (db, req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err)
            throw err;
        res.send(results);
    });
};
exports.getAllUsers = getAllUsers;
const createUser = (db, req, res) => {
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
};
exports.createUser = createUser;
const loginUser = (db, req, res) => {
    const { email, password } = req.body;
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], (err, results) => {
        if (err) {
            console.error('Error en la consulta: ' + err.message);
            res.status(500).json({ message: 'Error en el servidor' });
            return;
        }
        const users = results;
        if (users.length > 0) {
            const user = users[0];
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
};
exports.loginUser = loginUser;
const SecretPassword = (db, req, res) => {
    const secretpassword = req.body;
    const sql = 'SELECT * FROM users WHERE secretpassword = secretpassword';
    db.query(sql, secretpassword, (err, results) => {
        if (err) {
            console.log('You do not have permission' + err.message);
            res.status(500).json({ message: 'You do not have permission' });
            return;
        }
        if (secretpassword === secretpassword) {
            res.status(200).json({ message: 'You got permission' });
        }
        else {
            res.status(401).json({ message: 'Go back bicht' });
        }
    });
};
exports.SecretPassword = SecretPassword;
