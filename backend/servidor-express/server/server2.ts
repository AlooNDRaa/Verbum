import { setupUserRoutes } from '../routes/userRoutes/user.routes';
import express, { urlencoded } from 'express';
import { Server as SocketServer, Socket } from 'socket.io';
import mysql, { Connection } from 'mysql2';
import Console from 'console';
import dotenv from 'dotenv';
import http from 'http';
import cors from 'cors'
import { configureDatabase } from '../models/usermodel/user.model';
import { setupEggRoutesWithDb } from '../routes/eggroutes/egg.route';
import { configureDatabase2 } from '../models/egmodel/egg.model';

const PORT = process.env.PORT || 3000;
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

app.use(urlencoded({extended:false}));
app.use(cors(corsOptions));
app.use(express.json());
app.set('view engine', 'ejs');
dotenv.config();

let gameState = {
  history: [{ squares: Array(9).fill(null) }],
  stepNumber: 0,
  xIsNext: true,
};

io.on("connection", (socket: Socket) => {
  Console.log("client connected")

  socket.emit('gameState', gameState);

  socket.on('move', ({ squares }) => {
    gameState = {
      history: [...gameState.history, { squares }],
      stepNumber: gameState.history.length,
      xIsNext: !gameState.xIsNext,
    };

    io.emit('gameState', gameState);
  });

  socket.on ('chat', (body: string) => {
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
  configureDatabase(db);
  configureDatabase2(db);
});

app.get('/user', setupUserRoutes(db));
app.post('/login', setupUserRoutes(db));
app.post('/newuser', setupUserRoutes(db));
app.post('/password' , setupEggRoutesWithDb(db));



server.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto http://localhost:${PORT}`);
});
