import { Server as SocketServer, Socket } from 'socket.io';
import express, { Request, Response } from 'express';
import mysql, { Connection } from 'mysql2';
import Console from 'console';
import dotenv from 'dotenv';
import http from 'http';
import axios from 'axios';
import cors from 'cors'


const PORT = process.env.PORTT || 3000;
const app: express.Application = express();
const server: http.Server = http.createServer(app);
const io: SocketServer = new SocketServer(server, {
  cors: {
      origin: 'http://localhost:5173',
  },
});

const corsOptions = {
  origin: "http://localhost:5173"
};


app.use(cors(corsOptions));
app.use(express.json());
app.set('view engine', 'ejs');
dotenv.config();

io.on("connection", (socket: Socket) => {
  Console.log("client connected")

  socket.on ('chat', (body: string) => {
      console.log(body)
      console.log(body)
      socket.broadcast.emit("chat", {
          body:body,
          from: socket.id.slice(6)
        })
        Console.log(socket.id)
})})


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
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, result) => {
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

app.post('/recover-password', async (req, res) => {
  const email = req.body.email;
  try {
    await sendPasswordRecoveryEmail(email, 'token-unico');
    res.send('Correo de recuperación de contraseña enviado.');
  } catch (error) {
    console.error('Error al enviar el correo de recuperación:', error);
    res.status(500).json({ message: 'Error al enviar el correo de recuperación' });
  }
});

const sendPasswordRecoveryEmail = async (email: string, token: string): Promise<void> => {
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
    await axios.post(sendGridUrl, mailOptions, { headers });
    console.log('Correo de recuperación enviado a:', email);
  } catch (error) {
    throw new Error('Error al enviar el correo de recuperación: ');
  }
};

/*app.post('/save-message', (req, res) => {

  const messages = req.body.message;

  
  const sql = 'INSERT INTO messages (user_id, message_content) VALUES (?, ?)';
  db.query(sql, [messages, 'Servidor'], (err, result) => {
      if (err) {
          console.error('Error al guardar en la base de datos', err);
          res.status(500).json({ messages: 'Error al guardar mensaje' });
      } else {
          console.log('Mensaje guardado en la base de datos');
          res.status(200).json({ messages: 'Mensaje guardado exitosamente' });
      }
  });
});*/



server.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto http://localhost:${PORT}`);
});
