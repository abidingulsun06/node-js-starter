const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const middlewares = require('./middlewares');
const api = require('./routes');
const app = express();
require('dotenv').config();
const db = require('./models');

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

// Uncomment this line if you want to sync database model
db.sequelize.sync()

app.use('/api', api);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;