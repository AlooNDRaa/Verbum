import express from 'express'
import mysql from 'mysql2';
import cors from 'cors'

const app = express();
const PORT = 3000;

let corsOptions = {
  origin: "http://localhost:5173"
};
app.use(cors(corsOptions));

app.use(express.json());
app.set('view engine', 'ejs');


const db = mysql.createConnection({
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

app.get('/test', (req, res) => {
  res.json(
    {"message": "Hello World!"}
  )
})

app.post('/', (req, res) => {
  
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
  
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto http://localhost:${PORT}`);
});
