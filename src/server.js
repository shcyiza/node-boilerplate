require('dotenv').config();
const express = require('express');
const consola = require('consola');


const cors = require('cors');

const loggingConfig = require('./config/LogginConfig');
const responder = require('./middlewares/responder')
const app = express();

// base configs
app.use(
  cors({origin: "*"}),
  express.json({ type: 'application/json' }),
  loggingConfig.getMiddleware()
);

// middelwares
app.use(responder)
 
app.get('/', function (req, res) {
  res.apiBadRequest(Error('Hello World'));
});

app.post('/', function (req, res) {
  res.send('Hello World');
});
 
app.listen(3000, () => consola.ready({
    message: `Server connected at port ${process.env.SERVER_PORT}`,
    badge: true,
  })
);