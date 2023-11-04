import express from 'express';
import User from '../dbconect/user.model.js';
import cors from 'cors';
import path from 'path';

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
  };
  
  const PORT = 3000;

  app.set('view engine', 'ejs');

  app.set('views', path.join(__dirname, 'views'))
  
  app.use('/', express.static(path.join(__dirname, 'public')));
  

app.use(express.json());
app.use(express.urlencoded({  extended:true}));
app.use(cors(corsOptions));


app.get('/', (req, resp) => {
  resp.json(
    "holo"
  )
  console.log("good job");
})

app.get('/test', (req, res) => {
    res.json(
        "Welcome to the API"
    )
})

import apps from '../routes/user.routes.js';


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });



