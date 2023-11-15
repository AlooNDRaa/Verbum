import nodemailer, { Transporter } from 'nodemailer';
import express, { Request, Response } from 'express';
import mysql, { Connection } from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const PORT = 3000;

let corsOptions = {
  origin: "http://localhost:5173"
};

app.use(cors(corsOptions));
app.use(express.json());
app.set('view engine', 'ejs');



  const db: Connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });


db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

app.get('/user', (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const sql = 'SELECT * FROM users';
  db.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

app.post('/', (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  db.query(sql, [username, email, password], (err, result) => {
    if (err) {
      console.error('Error al guardar en la base de datos', err);
      res.status(500).json({ message: 'Error al registrar usuario' });
    } else {
      console.log('Registro exitoso');
      res.status(200).json({ message: 'Registro exitoso' });
    }
  });
});

app.post('/log', (req: Request, res: Response) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ?';

  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error('Error en la consulta: ' + err.message);
      res.status(500).json({ message: 'Error en el servidor' });
      return;
    }
    if (Array.isArray(results) && results.length > 0) {
      const user = results[0] as { password: string };
      if (user.password === password) {
        res.status(200).json({ message: 'Inicio de sesión exitoso' });
      } else {
        res.status(401).json({ message: 'Contraseña incorrecta' });
      }
    } else {
      res.status(401).json({ message: 'Usuario no encontrado' });
    }
  });
});



const transporter = nodemailer.createTransport({
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
})

const sendPasswordRecoveryEmail = (email: string, token: string): void => {
  const mailOptions = {
    from: 'tuemail@gmail.com',
    to: email,
    subject: 'Recuperación de contraseña',
    text: `Para restablecer tu contraseña, haz clic en este enlace: https://tuaplicacion.com/reset-password/${token}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Correo enviado: ' + info.response);
    }
  });
};




app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto http://localhost:${PORT}`);
});

