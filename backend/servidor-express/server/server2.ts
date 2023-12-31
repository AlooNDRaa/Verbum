import { setupUserRoutes } from '../routes/userRoutes/user.routes';
import  Routers  from '../routes/userRoutes/chat.routes';
import express, { urlencoded } from 'express';
import { setupEggRoutesWithDb } from '../routes/eggroutes/egg.route';
import { configureDatabase } from '../models/usermodel/user.model';
import { configureDatabase2 } from '../models/egmodel/egg.model';
import { configureSocket } from '../socketConnection/socket.mannage';
import { configureDatabase3, saveMovimientos } from '../models/gamemodel/game.model';
import mysql, { Connection } from 'mysql2';
import sequelize from '../config/database';
import dotenv from 'dotenv';
import http from 'http';
import cors from 'cors'
import router from '../routes/gameRoutes/game.routes';

const PORT = process.env.PORT || 3000;
const app: express.Application = express();
const server: http.Server = http.createServer(app);
const io = configureSocket(server);




const corsOptions = {
  origin: "http://localhost:5173"
};

app.use(urlencoded({extended:true}));
app.use(cors(corsOptions));
app.use(express.json());
app.set('view engine', 'ejs');
dotenv.config();



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
  configureDatabase3(db);
});

sequelize.sync().then(() => {
  console.log('Base de datos conectada arlu');
});


app.get('/user', setupUserRoutes(db));
app.post('/login', setupUserRoutes(db));
app.post('/newuser', setupUserRoutes(db));
app.post('/password' , setupEggRoutesWithDb(db));
app.post('/messages', Routers);
app.use('/getid', Routers);
app.get('/userchat', Routers);
app.get('/game-users', router);
app.post('/movimientos', router);



server.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto http://localhost:${PORT}`);
});