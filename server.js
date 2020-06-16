'use strict';
const express = require('express');
const dayjs = require('dayjs');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  const time = dayjs().format('YYYY-MM-DD HH:mm:ss');
  const message = `${time} Container Access!!!`;
  console.log(message);
  res.send('Hello World');
});

app.listen(PORT, HOST);
