require('dotenv').config();
const express = require('express');
const consola = require('consola');

const cors = require('cors');

const loggingConfig = require('./config/LogginConfig');
const responder = require('./middlewares/responder');
const app = express();

// base configs
app.use(
  cors({origin: "*"}),
  express.json({ type: 'application/json' }),
  loggingConfig.getMiddleware(),
);

// middelwares
app.use(responder)

// Register our routes from controllers folder
const v1_routes = require('./src/controllers/v1')
app.use('/', v1_routes);
app.all('/*', (req, res) => {
  res.apiNotFound(new Error("Route not found"));
});
 
app.listen(3000, () => consola.ready({
    message: `Server connected at port ${process.env.SERVER_PORT}`,
    badge: true,
  })
);

module.exports = app;