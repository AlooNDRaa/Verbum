import { setupEggRoutesWithDb } from '../routes/eggroutes/egg.route';
import { setupUserRoutes } from '../routes/userRoutes/user.routes';
import express, { Request, Response, urlencoded } from 'express';
import { Server as SocketServer, Socket } from 'socket.io';
import mysql, { Connection } from 'mysql2';
import Console from 'console';
import dotenv from 'dotenv';
import http from 'http';
import cors from 'cors'

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


io.on("connection", (socket: Socket) => {
  Console.log("client connected")

io.on("connection", (socket) => {
  let gameState = {
    board: Array(9).fill(null),
    turn: "❌",
  };

  socket.on("startGame", () => {
    // Inicializar el estado del juego
    gameState.board = Array(9).fill(null);
    gameState.turn = "❌";

    // Enviar el estado del juego a ambos jugadores
    io.emit("gameState", gameState);
  });

  socket.on("makeMove", (index) => {
    // Verificar si el movimiento es válido
    if (gameState.board[index] === null && gameState.turn === socket.id) {
      // Actualizar el estado del juego con el nuevo movimiento
      gameState.board[index] = gameState.turn;
      gameState.turn = gameState.turn === "❌" ? "⚪" : "❌";

      // Enviar el estado del juego actualizado a ambos jugadores
      io.emit("gameState", gameState);
    }
  });

  socket.on("endGame", () => {
    // Reiniciar el estado del juego
    gameState.board = Array(9).fill(null);
    gameState.turn = "❌";

    // Enviar un mensaje de fin de juego a ambos jugadores
    io.emit("gameOver", "El juego ha terminado");

    // Enviar el estado del juego reiniciado a ambos jugadores
    io.emit("gameState", gameState);
  });
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
});



app.get('/user', setupUserRoutes(db));
app.post('/login', setupUserRoutes(db));
app.post('/', setupUserRoutes(db));
app.post('/password' , setupEggRoutesWithDb(db));
app.use(setupUserRoutes)
app.use(setupEggRoutesWithDb)
app.post


server.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto http://localhost:${PORT}`);
});
