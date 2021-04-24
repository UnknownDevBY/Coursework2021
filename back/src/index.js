const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const dbConnection = require('./database/connection');
const {executeInitialScript} = require('./services');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

(async () => {
  await dbConnection.sync({});
  executeInitialScript();
  app.listen(process.env.PORT || 5000);
})();
