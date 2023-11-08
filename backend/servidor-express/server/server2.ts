import express, { Request, Response } from 'express';
import mysql, { Connection } from 'mysql2';
import cors from 'cors';

const app = express();
const PORT = 3000;

let corsOptions = {
  origin: "http://localhost:5173"
};

app.use(cors(corsOptions));
app.use(express.json());
app.set('view engine', 'ejs');

const db: Connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'nebulosadelvelo2023',
  database: 'verbum',
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
  const sql = 'SELECT * FROM USERS';
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

app.post('/login', (req, res) => {
  const { Email, Password } = req.body;
  const sql = 'SELECT * FROM usuarios WHERE email = ?';

  db.query(sql, [Email], (err, results) => {
    if (err) {
      console.error('Error en la consulta: ' + err.message);
      res.status(500).json({ message: 'Error en el servidor' });
      return;
    }

    if (results.length > 0) {
      const user = results[0];
      if (user.password === Password) {
        res.status(200).json({ message: 'Inicio de sesión exitoso' });
      } else {
        res.status(401).json({ message: 'Contraseña incorrecta' });
      }
    } else {
      res.status(401).json({ message: 'Usuario no encontrado' });
    }
  });
});


app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto http://localhost:${PORT}`);
});

